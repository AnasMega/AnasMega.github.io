// src/components/LottieCharacter.jsx
import React from 'react';
import Lottie from 'lottie-react';

// You can use these free developer animations:
// Option 1: Download from LottieFiles: https://lottiefiles.com/search?q=developer&category=animations
// Option 2: Use this simple coding animation data:

const codingAnimation = {
    // This is a simplified version - you'd replace with actual Lottie JSON
    v: "5.7.4",
    fr: 30,
    ip: 0,
    op: 90,
    w: 400,
    h: 400,
    nm: "Developer Animation",
    ddd: 0,
    assets: [],
    layers: [
        {
            ddd: 0,
            ind: 1,
            ty: 4,
            nm: "Developer",
            sr: 1,
            ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [200, 200, 0], ix: 2 },
                a: { a: 0, k: [0, 0, 0], ix: 1 },
                s: { a: 0, k: [100, 100, 100], ix: 6 }
            },
            shapes: [
                {
                    ty: "gr",
                    it: [
                        {
                            ty: "rc",
                            d: 1,
                            s: { a: 0, k: [60, 80] },
                            p: { a: 0, k: [0, 0] },
                            r: { a: 0, k: 10 },
                            nm: "Rectangle Path 1",
                            mn: "ADBE Vector Shape - Rect",
                            hd: false
                        },
                        {
                            ty: "fl",
                            c: { a: 0, k: [0.2, 0.4, 0.8, 1] },
                            o: { a: 0, k: 100 },
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: false
                        },
                        {
                            ty: "tr",
                            p: { a: 0, k: [0, 0] },
                            a: { a: 0, k: [0, 0] },
                            s: { a: 0, k: [100, 100] },
                            r: { a: 0, k: 0 },
                            o: { a: 0, k: 100 },
                            sk: { a: 0, k: 0 },
                            sa: { a: 0, k: 0 },
                            nm: "Transform"
                        }
                    ],
                    nm: "Rectangle 1",
                    np: 3,
                    cix: 2,
                    bm: 0,
                    ix: 1,
                    mn: "ADBE Vector Group",
                    hd: false
                }
            ]
        }
    ],
    markers: []
};

const LottieCharacter = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
            {/* Multiple floating developer animations */}
            <div className="absolute w-64 h-64 right-5 bottom-10 opacity-20">
                <Lottie
                    animationData={codingAnimation}
                    loop={true}
                    className="w-full h-full"
                />
            </div>

            <div className="absolute w-48 h-48 top-20 left-10 opacity-15">
                <Lottie
                    animationData={codingAnimation}
                    loop={true}
                    className="w-full h-full"
                />
            </div>
        </div>
    );
};

export default LottieCharacter;