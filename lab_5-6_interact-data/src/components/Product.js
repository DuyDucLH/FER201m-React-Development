import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

export default function Product({ product, setCartTotal, setCartDiscountedTotal }) {

	const [quantity, setQuantity] = useState(0);
	const [total, setTotal] = useState(0);
	const [discountedPrice, setDiscountedPrice] = useState(0);

	useEffect(() => {
		setQuantity(product.quantity);
		setTotal(product.total);
		setDiscountedPrice(product.discountedPrice);
	}, [product]);

	function handleChangeQuantity(e) {
		if (e.target.value < 0) return;

		let newQuantity = e.target.value;
		let newTotal = Math.round(newQuantity * product.price);
		let newDiscountedPrice = Math.round(newTotal * ((100 - product.discountPercentage) / 100));

		setCartTotal(pre => Math.round(pre - total + newTotal));
		setCartDiscountedTotal(pre => Math.round(pre - discountedPrice + newDiscountedPrice))

		setQuantity(newQuantity);
		setTotal(newTotal);
		setDiscountedPrice(newDiscountedPrice);
	}

	return (
		<tr key={product.id}>
			<td>{product.id}</td>
			<td>{product.title}</td>
			<td>{product.price}</td>
			<td>
				<Form.Control type="number" placeholder="Enter quantity" value={quantity} onChange={handleChangeQuantity} />
			</td>
			<td>{total}</td>
			<td>{discountedPrice}</td>
			<td><img src={product.thumbnail} alt={product.title} style={{ height: '100px' }} /></td>
		</tr >
	);
};
