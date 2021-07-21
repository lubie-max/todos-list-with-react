import React from 'react'

export const Footer = () => {
    let FooterStyle={
        
        position:"relative",
        padding:"30px",
        border:"after",
        top:"54vh",
        width:"100%"



    }
    return (
      
        <div>
            <footer className="bg-dark text-light py-3" style={FooterStyle}>
                <p className="text-center">
                    CopyRighted &copy; Lubie.TodosList.com
                </p>
            </footer>
        </div>
    )
}
