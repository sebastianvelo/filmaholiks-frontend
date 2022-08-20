enum ComponentHovereableColor {
    PRIMARY = 'bg-primary hover:bg-primary-dark text-dark',
    SECONDARY = 'bg-secondary-light hover:bg-secondary-lighter text-dark dark:bg-secondary dark:hover:bg-secondary-dark dark:text-light',
    NORMAL = 'bg-light text-dark hover:bg-light-dark dark:bg-dark dark:text-light dark:hover:bg-dark-light',
    DANGER = 'bg-danger text-light hover:bg-danger-dark',
    INFO = 'bg-info text-light hover:bg-info-dark',
    SUCCESS = 'bg-success hover:bg-success-dark text-white',
    WARNING = 'bg-warning hover:bg-warning-dark text-white',
    TRANSPARENT = ''
}

export default ComponentHovereableColor;