import React, { useEffect, useRef } from 'react';
import Phaser from "phaser";
import Scene from "./Scene";

const Game1 = () => {
    const parentRef = useRef(null)

    useEffect(() => {
        const game1 = new Phaser.Game({
            parent: parentRef.current,
            width: "100%",
            height: "100%",
            autoFocus: false,
            physics: {
                default: "arcade"
              },
              scale: {
                mode: Phaser.Scale.ScaleModes.FIT
              },
              scene: [Scene]
        })
        return () => game1.destroy();
    })

    return (
        <div
            className="game1"
            style={{ width: "100vw", height: "100vh" }}
            ref={parentRef}
        ></div>
    );
}

export default Game1;
