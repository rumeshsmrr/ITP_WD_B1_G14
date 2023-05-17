const ProductManager = () => {

    return(
            <body className="r-body">
                <div className="r-container-lg">

                    <div className="r-table-responsive">

                        <div className="r-table-wrapper">

                            <table className="table r-table-bordered">

                                <thead>

                                    <tr>
                                        <th>Product Name</th>
                                        <th>Product Category</th>
                                        <th>Product Price</th>
                                        <th>Actions</th>
                                    </tr>

                                </thead>
                                <tbody>
                                    <tr>
                                        <td>JJ</td>
                                        <td>Aaa</td>
                                        <td>asdfa</td>
                                        <td>
                                            <button><a className="r-edit" title="Edit" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></a></button>
                                            <a className="r-delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                                        </td>
                                    </tr>
                                </tbody>

                            </table>

                        </div>

                    </div>



                </div>

                </body>
    )
}


export default ProductManager