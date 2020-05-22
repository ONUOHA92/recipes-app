import React from 'react';


function Header({children,title, StyleClass}) {
    
        return (
           <header>
               <div className="container-fluid">
                   <div className={`row align-items-center, ${StyleClass}`}>
                       <div className="col text-center align-center">
                           <h1 className="text-light text-uppercase display-3 letter-spacing text-slanted align-middle">
                            {title}
                           </h1>
                           {children}
                       </div>
                   </div>
               </div>
           </header>
        );
    
}

Header.defaultProps = {
     title : 'default title',
    StyleClass: "header-hero"
}



export default Header;

