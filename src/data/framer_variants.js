

// ModalCopy.jsx animation
export const modalCopy = {
    hidden: {
        y: -100,
        opacity: 0, 
    },
    visible: {
        y: 0,
        opacity: 1,
    }
}


//HomePage.jsx animation 

//logo animation
export const LogoAnimation = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}

export const noYet = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}


// description animation
export const Description_text = {
    hidden: {
        x: -240,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1
    },
    transition: {
        delay: 0.2
    }
}


// History.jsx animation
export const title_animate = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}

// ListItem.jsx animation
export const list  = {
    hidden: {
        opacity: 0,
        x: -200
    },
    visible: (custom) => ({
        opacity: 1,
        x: 0,
        transition: { delay: (custom / 16) * 0.7 }
    })
}


export const title_github = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}

export const link = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1
    }
}