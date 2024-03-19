import Link from "next/link";
import style from './AtiveLink.module.css';

interface Props {
    path: string;
    text: string;
}



export const ActiveLink = ({path, text}:Props) => {
  return (
          <Link 
          className={`${style.ActiveLink}`}
          href={path}>
            {text}
            </Link>  
    
  )
}

