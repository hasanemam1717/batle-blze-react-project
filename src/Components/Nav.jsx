import { useEffect, useState } from "react";

const Nav = () => {
    const [theme,setTheme] = useState('light')
    useEffect(() =>{
      localStorage.setItem('theme', theme)
      const localTheme = localStorage.getItem('theme')
      document.getElementById('html').setAttribute('data-theme', localTheme)
    },[theme])
    const handdleToggle = (e ) => {
        if(e.target.checked){
            setTheme('synthwave')
        }else{
            setTheme('light')
        }
    }
    console.log(theme);
    return (
        <div className="navbar bg-base-100 shadow-lg px-10 fixed z-10">
        <div className="flex-1">
          <a className="btn btn-ghost text-2xl"><span className="text-orange-600 font">Batle</span>Byte</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="font-bold text-xl"><a>Home</a></li>
            <li className="font-bold text-xl text-orange-600"><a>Blogs</a></li>
            <li className="font-bold text-xl"><a>Book Marks</a></li>
          </ul>
                    <label className="flex cursor-pointer gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
            <input onChange={handdleToggle} type="checkbox" value="synthwave" className="toggle theme-controller"/>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </label>
        </div>
      </div>
    );
};

export default Nav;