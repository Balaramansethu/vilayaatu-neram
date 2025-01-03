import spinnerStyles from './SpinnerLoaderComponent.module.css'
//prabanjan comment
// dummy comment bro
//second prabanjan comment
// comment bro 
function SpinnerLoaderComponent() {
// Hello

    // hello this is thiru trying --rebase
    return (
        <svg
          className={spinnerStyles.loader}
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
}

export default SpinnerLoaderComponent
