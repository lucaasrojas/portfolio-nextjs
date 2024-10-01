import Image from "next/image";

interface ImageSpinnerProps {
    src: string
}

const ImageSpinner: React.FC<ImageSpinnerProps> = ({ src }) => {
    return (
        <div className="profile-image m-auto max-[768px]:order-1 min-[768px]:order-2">
            <div className="image-circle">
                <div className="white-space"></div>
                <div className="image-circle-line"></div>
                <div className="image-wrapper">
                    <Image
                        width={280}
                        height={280}
                        src={src}
                        alt="profile image with spinner effect"
                    />
                </div>
            </div>
        </div>
    )
}

export default ImageSpinner