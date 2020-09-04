import React, { useContext } from 'react'
import Product from './Product'
import Title from './Title'
import { ProductContext } from '../context'

export default () => {
  const { products } = useContext(ProductContext)
  return (
    <React.Fragment>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            {products.map(product => {
              return <Product key={product.id} product={product} />
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

// import React, { Component } from 'react'
// import Product from './Product'
// import Title from './Title'
// import { ProductConsumer } from '../context'

// export default class ProductList extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <div className="py-5">
//           <div className="container">
//             <Title name="our" title="products" />
//             <div className="row">
//               <ProductConsumer>
//                 {(value) => {
//                   return value.products.map(product => {
//                     return <Product key={product.id} product={product} />
//                   })
//                 }}
//               </ProductConsumer>
//             </div>
//           </div>
//         </div>
//       </React.Fragment>
//     )
//   }
// }
