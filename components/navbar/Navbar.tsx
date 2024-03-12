const temporalAsync = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  })
  
}

export const Navbar = async () => {
  await temporalAsync();
  return <nav className="flex bg-blue-800 bg-opacity-30 p-2 ms-2 ">
    <span> Home</span>

    <div className="flex flex-1"></div>

    <a className="mr-2" href="/about"> About </a>
    <a className="mr-2" href="/pricing"> pricing </a>
    <a className="mr-2" href="/contact"> contact </a>
  </nav>;
};

