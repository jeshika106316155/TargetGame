export var Slide = {
    id: string,
    anchor: number,
    bg: string,
    shap: Shap,
    size: Size
}

export var Shap = {
    x: {
        name: string,
        value: number
    },
    y: {
        name: string,
        value: number
    }
}

export var Size = {
    width: {
        name: string,
        value: number
    },
    height: {
        name: string,
        value: number
    }
}