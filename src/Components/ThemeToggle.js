import React, { useRef, useState } from 'react';

const mainContainer = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'orange',
};

const toggleButton = {
    width: '200px',
    height: '50px',
    background: 'black',
    borderRadius: '1000px',
    border: '2px solid #f4f4f4',
    boxShadow: '#00000a1a 7px 7px 9px',
    padding: '5px',
    position: 'relative',
    cursor: 'pointer',
};

const mainButton = {
    width: '50px',
    height: '50px',
    background: '#fff',
    borderRadius: '1000px',
    position: 'absolute',
    left: '5px',
    transition: 'transform ease-in-out 2s, left ease-in-out 5s, right ease-in-out 5s',
    right: 'auto',
    transform: 'scale(1)',
};

const divider = {
    marginTop: '20px',
    width: '1%',
    height: '2px',
    background: '#fff',
    transition: 'width 2s ease-in-out',
};


export const ThemeToggle = () => {
    const [isToggle, setToggle] = useState(true);

    const BackgroundRef = useRef(null);
    const ButtonRef = useRef(null);
    const ParaRef = useRef(null);
    const Dref = useRef(null);

    const DescSize = () => {
        ButtonRef.current.style.transition = 'transform ease-in-out 1s';
        ButtonRef.current.style.transform = 'scale(0.7)';
    };

    const IncreaseSize = () => {
        ButtonRef.current.style.transition = 'transform ease-in-out 1s';
        ButtonRef.current.style.transform = 'scale(1)';
    };

    const handleToggle = () => {
        DescSize();

        const check = () => {

            if (isToggle) {
                setToggle(false);
                ButtonRef.current.style.left = 'auto';
                ButtonRef.current.style.right = '5px';
                BackgroundRef.current.style.background = '#000';
                ParaRef.current.classList.remove('parawhite');
                ParaRef.current.classList.add('paraBlack');
                Dref.current.style.width = '100%';
            } else {
                setToggle(true);
                ButtonRef.current.style.left = '5px';
                ButtonRef.current.style.right = 'auto';
                BackgroundRef.current.style.background = 'orange';
                ParaRef.current.classList.remove('paraBlack');
                ParaRef.current.classList.add('parawhite');
                Dref.current.style.width = '1%';
            }
        }

        setTimeout(() => {
            check();
            IncreaseSize();
        }, 2000)
    };

    return (
        <div style={mainContainer} ref={BackgroundRef}>
            <div style={toggleButton} onClick={handleToggle}>
                <div style={mainButton} ref={ButtonRef} />
            </div>
            <div>
                <div style={divider} ref={Dref} />
                <p className={'paraWhite'} ref={ParaRef} style={{ width: '600px' }}>
                    <h1>Welcome to {isToggle ? 'Light' : 'Dark'} theme </h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit a, perferendis vero exercitationem dignissimos
                    voluptate in itaque error commodi placeat cumque velit asperiores
                    ab cum quisquam! Sed voluptatum minus sunt. Harum deleniti doloribus
                </p>
            </div>
        </div>

    )
}
