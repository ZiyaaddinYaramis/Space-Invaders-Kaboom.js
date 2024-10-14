// Kaboom.js ayarları
kaboom({
  fullscreen: true,
  width: 240,
  height: 240,
  scale: 1,
  startScene: "main",
  version: "0.5.0",
  clearColor: [0, 0, 0, 1],
  global: true,
  plugins: [peditPlugin, asepritePlugin, kbmspritePlugin],
});

// Modüllerin içe aktarılması
import { loseScene } from "./lose.js";
import { winScene } from "./win.js";
import { mainScene } from "./main.js";

// Varlıkların yüklenmesi
loadKbmsprite("space-invader", "sprites/space-invader.kbmsprite");
loadKbmsprite("space-ship", "sprites/space-ship.kbmsprite");
loadKbmsprite("wall", "sprites/wall.kbmsprite");

// Sahne Tanımları
scene("lose", loseScene);
scene("win", winScene);
scene("main", mainScene);

// Oyunu başlatma
start("main");
