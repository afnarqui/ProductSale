<?php

namespace App\Http\Controllers;

use App\product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
                $product = product::get();
                echo json_encode($product);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
    public function creat(Request $request)
    {
        $query = new product;
        $query->name = $request->input('name');
        $query->price = $request->input('price');
        $query->description = $request->input('description');
        $query->photo = $request->input('photo');
        $query->idCategory = $request->input('idCategory');
        $query->idUser = $request->input('idUser');
        $query->save();
        $select = DB::select( "select * from products");
        echo json_encode( $select);

    }
    public function search(Request $request)
    {
        $select = DB::select( "select * from products");
        echo json_encode( $select);

    }
    public function actualizar(Request $request)
    {
        $id = $request->input('id');
        $products = product::find($id);
        $products->name = $request->input('name');
        $products->description = $request->input('description');
        $products->price = $request->input('price');
        $products->photo = $request->input('photo');
        $products->idCategory = $request->input('idCategory');
        $products->idUser = $request->input('idUser');
        $products->save();
        $select = DB::select( "select * from products");
        echo json_encode( $select);
    }
    public function eliminar(Request $request) {
        $id = $request->input('id');
        $products = product::find($id);
        $products->delete();
        $select = DB::select( "select * from products");
        echo json_encode( $select);
    }
}
