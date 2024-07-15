import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
 
const convertBreadcrumb = string => {
  if (typeof string !== 'string') {
    return ''; // or handle it in a way that makes sense for your application
  }

  return string
    .replace(/-/g, ' ')
    .replace(/oe/g, 'ö')
    .replace(/ae/g, 'ä')
    .replace(/ue/g, 'ü')
    .toUpperCase();
};
 
const Breadcrumbs = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);
 
  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/');
      linkPath.shift();
      const pathArray = [
        { breadcrumb: linkPath[0], href: '/' + linkPath[0] },
       /* { breadcrumb: linkPath[1], href: '/' + linkPath.slice(0, 2).join('/') },*/
       ];
  
      setBreadcrumbs(pathArray);
    }
  }, [router]);
 
  if (!breadcrumbs) {
    return null;
  }
 
  return (
    <nav aria-label="breadcrumbs">
      <ol className="breadcrumb df fac pdb20 mpdb10 mfw">
        <li className=''>
          <Link href="/" className="fs16 mfs12 cw df fac"><div className='df fac'><img src='/image/home-icon.webp' width={"18px"} height={"18px"} alt='home-icon' /></div>HOME&nbsp;/&nbsp;</Link>
        </li>
        {breadcrumbs.map((breadcrumb, i) => {
          const isLastBreadcrumb = i === breadcrumbs.length - 1;
          return (
            <li key={breadcrumb.href} className="mlr4">
              <a href={breadcrumb.href}>
                <a className="fs16 mfs12 lh cw df fac">
                  {convertBreadcrumb(breadcrumb.breadcrumb)}
                  {isLastBreadcrumb ? null : <>&nbsp;/&nbsp;</>}
               </a>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
 
export default Breadcrumbs;