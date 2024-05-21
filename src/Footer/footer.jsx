import './footer.css'
export default function Foo(){
    return(
        <>
        <footer>
            <div className='foo-container'>
                <ul className='ult'>
                    <li className='ul-itm'>
                        <a href="#">About</a>
                    </li>
                    <li className='ul-itm'>
                        <a href="#">Privacy policy</a>
                    </li>
                    <li className='ul-itm'>
                        <a href="#">Terms of service</a>
                    </li>
                    <li className='ul-itm'>
                        <a href="#">Contact</a>
                    </li>
                </ul>
                <div className='devo-des'>
                    <h4>We are not affiliated with Instagram or Meta.</h4>
                    <p>&copy;2024 Instadevo All rights reserved.</p>
                </div>

            </div>


        </footer>
        </>
    )
}