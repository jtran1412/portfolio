import React, { createContext, useState, useRef, useCallback, ReactNode, useEffect } from 'react';

const playlist = [
    '/music/SSJ3 Power Up Remake By Gladius.mp3',
];

interface MusicContextType {
  isPlaying: boolean;
  togglePlay: () => void;
}

export const MusicContext = createContext<MusicContextType>({
  isPlaying: false,
  togglePlay: () => {},
});

export const MusicProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const playNextSong = useCallback(() => {
        setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playlist.length);
    }, []);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(e => console.error("Audio play failed:", e));
            }
            setIsPlaying(!isPlaying);
        }
    };
    
    useEffect(() => {
        if (audioRef.current) {
            const newSrc = playlist[currentSongIndex];
            if (audioRef.current.src !== window.location.origin + newSrc) {
                audioRef.current.src = newSrc;
            }
            
            if (isPlaying) {
                audioRef.current.play().catch(e => console.error("Audio play failed:", e));
            }
        }
    }, [currentSongIndex, isPlaying]);

    return (
        <MusicContext.Provider value={{ isPlaying, togglePlay }}>
            {children}
            <audio 
                ref={audioRef} 
                loop={true}
            />
        </MusicContext.Provider>
    );
}; 