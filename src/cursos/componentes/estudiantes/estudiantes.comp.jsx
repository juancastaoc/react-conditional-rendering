import  React from 'react';
import ProductCategoryRow from '../product-category-row/product-category-row.comp';
import ProductRow from '../product-row/product-row.comp';




import './estudiantes.style.css';
import mujer from './imagenes/mujer.png';
import hombre from './imagenes/hombre.png';



const ProductTable = () => {
    return (
        <div className="estudiantes-container">
           <ProductCategoryRow categoryName="Programación 1"/>
           <div className="titulos">
               Nombre  Nota  Género  Imagen
            </div>
           
                <ProductRow product={{
                    name:"Pepito",
                    nota:3.5,
                    genero:"Masculino",
                    img:<img src={hombre} />,        
                }
                }/>               

                <ProductRow product={{
                    name:"María",
                    nota:2.1,
                    genero:"Femenino",
                    img:<img src={mujer} />,
                }}/>

                <ProductRow product={{
                    name:"Carlitos",
                    nota:2,
                    genero:"Masculino",
                    img:<img src={hombre} />,
                }}/>

<ProductCategoryRow categoryName="Programación 2"/>
           <div className="titulos">
               Nombre  Nota  Género  Imagen
            </div>
                
                <ProductRow product={{
                    name:"Miguel",
                    nota:3.5,
                    genero:"Masculino",
                    img:<img src={hombre} />,        
                }
                }/>               

                <ProductRow product={{
                    name:"Natalia",
                    nota:2.1,
                    genero:"Femenino",
                    img:<img src={mujer} />,
                }}/>

                <ProductRow product={{
                    name:"Camilo",
                    nota:2.1,
                    genero:"Masculino",
                    img:<img src={hombre} />,
                }}/>

                <ProductRow product={{
                    name:"Eduardo",
                    nota:3.5,
                    genero:"Masculino",
                    img:<img src={hombre} />,
                }}/>
                              


            <ProductRow product={{
                    name:"Emilio",
                    nota:3.8,
                    genero:"Masculino",
                    img:<img src={hombre} />,        
                }
                }/>               

                <ProductRow product={{
                    name:"Gustavo",
                    nota:3.4,
                    genero:"Masculino",
                    img:<img src={hombre} />,
                }}/>

                <ProductRow product={{
                    name:"Pedro",
                    nota:3.6,
                    genero:"Masculino",
                    img:<img src={hombre} />,
                }}/>
                <ProductRow product={{
                    name:"Laura",
                    nota:3.7,
                    genero:"Femenino",
                    img:<img src={mujer} />,        
                }
                }/>               

                <ProductRow product={{
                    name:"Camila",
                    nota:3.8,
                    genero:"Femenino",
                    img:<img src={mujer} />,
                }}/>

                <ProductRow product={{
                    name:"Yesica",
                    nota:4,
                    genero:"Femenino",
                    img:<img src={mujer} />,
                }}/>

                <ProductRow product={{
                    name:"Jorge",
                    nota:4.2,
                    genero:"Masculino",
                    img:<img src={hombre} />,
                }}/>

           <ProductCategoryRow categoryName="Programación 3"/>  
           <div className="titulos">
               Nombre  Nota  Género  Imagen
            </div>
            <ProductRow product={{
                    name:"Oscar",
                    nota:2.1,
                    genero:"Masculino",
                    img:<img src={hombre} />,        
                }
                }/>               

                <ProductRow product={{
                    name:"Sofia",
                    nota:3.5,
                    genero:"Femenino",
                    img:<img src={mujer} />,
                }}/>

                <ProductRow product={{
                    name:"Ricardo",
                    nota:2,
                    genero:"Masculino",
                    img:<img src={hombre} />,
                }}/>
                <ProductRow product={{
                    name:"Alvaro",
                    nota:3.6,
                    genero:"Masculino",
                    img:<img src={hombre} />,        
                }
                }/>               

                <ProductRow product={{
                    name:"Patricia",
                    nota:4,
                    genero:"Femenino",
                    img:<img src={mujer} />,
                }}/>

                <ProductRow product={{
                    name:"Monica",
                    nota:2.6,
                    genero:"Femenino",
                    img:<img src={mujer} />,
                }}/>

                <ProductRow product={{
                    name:"Esteban",
                    nota:3.9,
                    genero:"Masculino",
                    img:<img src={hombre} />,
                }}/>
                
        </div>
    );    
}

export default ProductTable;