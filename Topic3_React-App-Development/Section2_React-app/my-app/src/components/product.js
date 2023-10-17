// import { Component } from 'react';
// //Class component
// export class Category extends Component {		//Must extend Component of React
// 	render() {	//Override render() from Component
// 		return (
// 			<div>
// 				<h2>Category class component</h2>
// 			</div>
// 		);
// 	}
// }

import { Table } from "react-bootstrap";
import { useParams, useSearchParams } from 'react-router-dom';

//Function component: Parameter is Object, so need to destructure
export default function ProductList({data=[]}) {
	// data.sort((a, b) => a.name.localeCompare(b.name));
	// const { cat_id } = useParams();
	const [searchParams] = useSearchParams();
	const cat_id = searchParams.get("cat_id");
	let filteredData = data;
	if (cat_id !== "all") {
		filteredData = data.filter(product => product.cat_id === parseInt(cat_id));
	}
	return (
		<Table>
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Price</th>
					<th>Image</th>
				</tr>
			</thead>
			<tbody>
				{	//Use Javascript expression in JSX
					//Không sử dụng for of, for in, forEach đươc để return vì nó không trả về giá trị
					filteredData.map((item) =>
						<Product key={item.id} id={item.id} name={item.name} price={item.price} image={item.image} />
					)
				}
			</tbody>
		</Table>
	);
}

function Product(product) {
	return (
		<tr>
			<td>{product.id}</td>
			<td>{product.name}</td>
			<td>{product.price}</td>
			<td><img src={product.image} alt={product.name} width="100px" height="100px" /></td>
		</tr>
	);
}
