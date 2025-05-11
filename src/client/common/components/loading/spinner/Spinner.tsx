const Spinner: React.FC = () => (
    <div className={'ease-linear rounded-full h-20 w-20 relative border-4 dark:border-primary-500 border-secondary-500'}>
        <div className={'ease-linear rounded-full h-20 w-20 absolute -top-1 -left-1 border-t-4 border-b-0 border-l-4 border-r-0 border-secondary-500 dark:border-primary-500 animate-spin'}>
        </div>
    </div>
)

export default Spinner;