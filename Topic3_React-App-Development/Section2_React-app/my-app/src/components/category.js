import { ListGroup, ListGroupItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function CategoryList({ data = [] }) {
	data.sort((a, b) => {	//sort() is a method of Array, sort by value return negative, 0, positive
		// return a.name.localeCompare(b.name) //same with compareString in java
		return a.id - b.id;	//sort by id
	});
	return (
		<ListGroup as='ul'>
			<ListGroupItem as='li' >
				<NavLink to={{
					// pathname: `/category/all`,
					pathname: `/category`,
					search: `?cat_id=all`,
				}}>All</NavLink>
			</ListGroupItem>
			{data.map((item) => (
				<Category key={item.id} id={item.id} name={item.name} />
			))}
		</ListGroup >
	);
}

function Category(category) {
	return (
		<ListGroupItem as='li'>
			<NavLink to={{
				// pathname: `/category/${category.id}`,
				pathname: `/category`,
				search: `?cat_id=${category.id}`,
			}}>{category.name}</NavLink>
		</ListGroupItem>
	);
}