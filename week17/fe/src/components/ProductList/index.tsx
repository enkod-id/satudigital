import { Table } from "antd"
import { ColumnsType } from "antd/es/table";
import { Product } from "../../types"

interface Props {
    data: Product[];
    columns: ColumnsType<Product>;
}

const ProductList = ({ data, columns} : Props) => {

    return (
        <Table columns={columns} dataSource={data} />
    )
}

export default ProductList