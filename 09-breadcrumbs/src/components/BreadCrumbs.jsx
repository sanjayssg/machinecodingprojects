import { Link, useLocation } from 'react-router-dom'

const BreadCrumbs = () => {
  const {pathname}  = useLocation();
  const pathnames = pathname.split('/').filter(path => path);
  let breadcrumbs = '';
  return (
    <div className='breadcrumbs'>
      {pathnames.length > 0 && <Link to='/'>Home</Link>}
      {pathnames.map((name, index)=>{
        breadcrumbs += `/${name}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? 
          <span key={name}>/ {name}</span> :
          <span key={name}><Link to={breadcrumbs}>/ {name}</Link></span>
})}
    </div>
  )
}

export default BreadCrumbs