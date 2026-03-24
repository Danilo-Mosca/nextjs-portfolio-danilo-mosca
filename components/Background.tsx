import React from "react";

export default function Background() {
    return (
        <div className="fixed inset-0 -z-50 min-h-screen w-full bg-background overflow-hidden">
            {/* Griglia a punti (stile tech / developer) */}
            <div className="absolute h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(32,252,249,0.15),rgba(255,255,255,0))]"></div>

            {/* Griglia a linee */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>

            {/* Sfera luminosa Blurrata - Blue (In alto a sinistra) */}
            <div className="absolute -top-40 -left-40 h-[400px] w-[400px] rounded-full bg-accent-blue/10 blur-[100px] mix-blend-screen animate-pulse duration-1000"></div>

            {/* Sfera luminosa Blurrata - Green (In basso a destra, animazione ritardata) */}
            <div className="absolute top-[60%] right-[-10%] h-[500px] w-[500px] rounded-full bg-accent-green/10 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDelay: "2s", animationDuration: "4s" }}></div>

            {/* Sfera centrale più debole per collegare i colori */}
            <div className="absolute top-[40%] left-[20%] h-[300px] w-[300px] rounded-full bg-accent-blue/5 blur-[80px] animate-pulse" style={{ animationDelay: "1s", animationDuration: "5s" }}></div>
        </div>
    );
}
