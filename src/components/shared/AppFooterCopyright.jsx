function AppFooterCopyright() {
  return (
    <div className="flex justify-center items-center font-general-regular text-center">
      <div className="text-lg text-ternary-dark dark:text-ternary-light">
        &copy; {new Date().getFullYear()}
        <a
          href="https://github.com/realstoman/react-tailwindcss-portfolio"
          target="__blank"
          className="ml-1 hover:text-indigo-600 dark:hover:text-indigo-300 hover:underline duration-500"
        >
          It's a work of Allan! 🙂
        </a>
      </div>
    </div>
  );
}

export default AppFooterCopyright;
