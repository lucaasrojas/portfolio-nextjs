import Image from "next/image";
import styles from "./ImageSpinner.module.css"
interface ImageSpinnerProps {
    src: string
}

const ImageSpinner: React.FC<ImageSpinnerProps> = ({ src }) => {
    return (
        <div className={`${styles.profile_image} m-auto max-[768px]:order-1 min-[768px]:order-2`}>
            <div className={styles.image_circle}>
                <div className="white-space"></div>
                <div className={styles.image_circle_line}></div>
                <div className={styles.image_wrapper}>
                    <Image
                        width={280}
                        height={280}
                        src={src}
                        alt="profile image with spinner effect"
                        priority
                    />
                </div>
            </div>
        </div>
    )
}

export default ImageSpinner