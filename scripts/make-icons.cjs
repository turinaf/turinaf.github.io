// Generates icon.png and apple-icon.png from the same "T" design as icon.svg.
// Dependency-free: draws pixels and encodes a PNG with node:zlib.
const zlib = require("node:zlib");
const fs = require("node:fs");

const CRC_TABLE = (() => {
  const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? (0xedb88320 ^ (c >>> 1)) : c >>> 1;
    t[n] = c;
  }
  return t;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const typeBuf = Buffer.from(type, "ascii");
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])));
  return Buffer.concat([len, typeBuf, data, crc]);
}

const BG = [24, 24, 27]; // #18181b
const FG = [252, 252, 250]; // #fcfcfa

function insideRoundedSquare(px, py, size, r) {
  if (px < 0 || py < 0 || px >= size || py >= size) return false;
  const cx = Math.min(px, size - 1 - px);
  const cy = Math.min(py, size - 1 - py);
  if (cx >= r || cy >= r) return true;
  const dx = r - cx;
  const dy = r - cy;
  return dx * dx + dy * dy <= r * r;
}

function insideT(px, py, s) {
  const x = px / s;
  const y = py / s;
  const bar = x >= 16 && x <= 48 && y >= 18 && y <= 26;
  const stem = x >= 28 && x <= 36 && y >= 26 && y <= 48;
  return bar || stem;
}

function makeIcon(size) {
  const s = size / 64;
  const r = size * (14 / 64);
  const raw = Buffer.alloc(size * (size * 4 + 1));
  let o = 0;
  for (let y = 0; y < size; y++) {
    raw[o++] = 0; // filter: none
    for (let x = 0; x < size; x++) {
      let cov = 0;
      let fg = 0;
      for (let sy = 0; sy < 3; sy++) {
        for (let sx = 0; sx < 3; sx++) {
          const px = x + (sx + 0.5) / 3;
          const py = y + (sy + 0.5) / 3;
          if (insideRoundedSquare(px, py, size, r)) {
            cov++;
            if (insideT(px, py, s)) fg++;
          }
        }
      }
      if (cov === 0) {
        raw[o++] = 0;
        raw[o++] = 0;
        raw[o++] = 0;
        raw[o++] = 0;
      } else {
        const c = fg * 2 >= cov ? FG : BG;
        raw[o++] = c[0];
        raw[o++] = c[1];
        raw[o++] = c[2];
        raw[o++] = 255;
      }
    }
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // color type RGBA
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", zlib.deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

fs.writeFileSync("src/app/icon.png", makeIcon(256));
fs.writeFileSync("src/app/apple-icon.png", makeIcon(180));
console.log("written: src/app/icon.png, src/app/apple-icon.png");
