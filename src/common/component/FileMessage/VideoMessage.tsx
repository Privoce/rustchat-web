import { useRef, useState } from 'react';
import { formatBytes } from '../../utils';
import IconDownload from "../../../assets/icons/download.svg";
import IconVideo from "../../../assets/icons/file.video.svg";

type Props = {
    url: string,
    name: string,
    size: number,
    download: string
}

const VideoMessage = ({ url, name, size, download }: Props) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = useState(false);
    const _size = formatBytes(size);
    const handlePlaying = () => {
        setPlaying(true);
    };
    const handlePause = () => {
        if (videoRef && videoRef.current) {
            if (videoRef.current.seeking) return;
        }
        setPlaying(false);
    };
    return (
        <div className='w-96 h-52 relative rounded-md border border-solid border-gray-300 overflow-hidden group'>
            {!playing &&
                <>
                    <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-20 group-hover:hidden"></div>
                    <div className="absolute top-0 left-0 w-full flex justify-between z-30 px-3 py-2 overflow-hidden group-hover:bg-black/20">
                        <div className="flex gap-2 ">
                            <IconVideo className="w-9 h-auto" />
                            <div className="flex flex-col gap-1 text-sm text-white">
                                <span title={name} className='font-bold whitespace-nowrap text-ellipsis w-[240px] overflow-hidden'>{name}</span>
                                <span>{_size}</span>
                            </div>
                        </div>
                        <a href={download} className="mt-2"><IconDownload className="fill-white" /></a>
                    </div>
                </>
            }
            <video ref={videoRef} onPlaying={handlePlaying} onPause={handlePause} src={url} controls className="absolute left-0 top-0 w-full h-full object-cover z-10" />
        </div>
    );
};

export default VideoMessage;