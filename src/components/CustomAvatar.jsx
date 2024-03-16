import { memo } from "react";
import { Avatar as AntdAvatar } from "antd";
import ColumnGroup from "antd/es/table/ColumnGroup";

const CustomAvatarComponent = ({ name = "", style, ...rest }) => {
    console.log({ ...rest })

    const getNameInitials = (name, count = 2) => {
        const initials = name
            .split(" ")
            .map((n) => n[0])
            .join("");
        const filtered = initials.replace(/[^a-zA-Z]/g, "");
        return filtered.slice(0, count).toUpperCase();
    };


    const getRandomColorFromString = (text) => {
        const colors = [
            "#ff9c6e",
            "#ff7875",
            "#ffc069",
            "#ffd666",
            "#fadb14",
            "#95de64",
            "#5cdbd3",
            "#69c0ff",
            "#85a5ff",
            "#b37feb",
            "#ff85c0",
        ];

        let hash = 0;
        for (let i = 0; i < text.length; i++) {
            hash = text.charCodeAt(i) + ((hash << 5) - hash);
            hash = hash & hash;
        }
        hash = ((hash % colors.length) + colors.length) % colors.length;

        return colors[hash];
    };
    return (
        <AntdAvatar
            alt={name}
            size="small"
            style={{
                backgroundColor: rest?.src
                    ? "transparent"
                    : getRandomColorFromString(name),
                display: "flex",
                alignItems: "center",
                border: "none",
                ...style,
            }}
            {...rest}
        >
            {getNameInitials(name)}
        </AntdAvatar>
    );
};

export const CustomAvatar = memo(
    CustomAvatarComponent,
    (prevProps, nextProps) => {
        return (
            prevProps.name === nextProps.name && prevProps.src === nextProps.src
        );
    },
);
