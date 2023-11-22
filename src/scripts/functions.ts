import { Engine, Bodies, Body, Composite } from "matter-js";
import { Application, Sprite, Texture } from "pixi.js";
import { gWidth, gHeight, borderHeight } from "./constants";

export const runGameBorders = (app: Application, engine: Engine) => {
    let borderSize = 10;
    let ground = Bodies.rectangle(
    gWidth / 2,
    gHeight - borderSize / 2,
    gWidth,
    borderSize,
    { isStatic: true }
    );
    let leftWall = Bodies.rectangle(
    borderSize / 2,
    gHeight - borderHeight / 2,
    borderSize,
    borderHeight,
    { isStatic: true }
    );
    let rightWall = Bodies.rectangle(
    gWidth - borderSize / 2,
    gHeight - borderHeight / 2,
    borderSize,
    borderHeight,
    { isStatic: true }
    );

    let borders = Body.create({
    parts: [ground, leftWall, rightWall],
    isStatic: true,
    });

    Composite.add(engine.world, borders);

    let leftWallSprite = Sprite.from(Texture.WHITE);
    leftWallSprite.width = leftWall.bounds.max.x - leftWall.bounds.min.x;
    leftWallSprite.height = leftWall.bounds.max.y - leftWall.bounds.min.y;
    leftWallSprite.x = leftWall.bounds.min.x;
    leftWallSprite.y = leftWall.bounds.min.y;
    app.stage.addChild(leftWallSprite);

    let rightWallSprite = Sprite.from(Texture.WHITE);
    rightWallSprite.width = rightWall.bounds.max.x - rightWall.bounds.min.x;
    rightWallSprite.height = rightWall.bounds.max.y - rightWall.bounds.min.y;
    rightWallSprite.x = rightWall.bounds.min.x;
    rightWallSprite.y = rightWall.bounds.min.y;
    app.stage.addChild(rightWallSprite);

    let groundSprite = Sprite.from(Texture.WHITE);
    groundSprite.width = ground.bounds.max.x - ground.bounds.min.x;
    groundSprite.height = ground.bounds.max.y - ground.bounds.min.y;
    groundSprite.x = ground.bounds.min.x;
    groundSprite.y = ground.bounds.min.y;
    app.stage.addChild(groundSprite);
}

export const runDropLine = (app: Application, canvas: HTMLCanvasElement) => { 
    const dropLine = Sprite.from(Texture.WHITE);
    dropLine.width = 3;
    dropLine.height = gHeight;
    app.stage.addChild(dropLine);

    onmousemove = (e) => {
        dropLine.x = e.clientX - canvas.offsetLeft
    }
}

export const rand = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};