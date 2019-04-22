<?php

namespace App\Http\Controllers;

use App\category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }
    public function creat(Request $request)
    {
        $query = new category;
        $query->nombre = $request->input('nombre');
        $query->save();
        $select = DB::select( "select * from categories");
        echo json_encode( $select);

    }

    public function search(Request $request)
    {
        $select = DB::select( "select * from categories");
        echo json_encode( $select);

    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(category $category)
    {

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, category $category)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(category $category)
    {
        //
    }
    public function actualizar(Request $request)
    {
        $id = $request->input('id');
        $nombre = $request->input('nombre');
        $catego = category::find($id);
        $catego->id = $request->input('id');
        $catego->nombre = $nombre;
        $catego->save();
        $select = DB::select( "select * from categories");
        echo json_encode( $select);
    }
    public function eliminar(Request $request) {
        $id = $request->input('id');
        $catego = category::find($id);
        $catego->delete();
        $select = DB::select( "select * from categories");
        echo json_encode( $select);
    }

}
