<?php

namespace App\Http\Controllers;

use App\shoppingCar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class ShoppingCarController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $shoppingCars = shoppingCar::get();
        echo json_encode($shoppingCars);
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
     * @param  \App\shoppingCar  $shoppingCar
     * @return \Illuminate\Http\Response
     */
    public function show(shoppingCar $shoppingCar)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\shoppingCar  $shoppingCar
     * @return \Illuminate\Http\Response
     */
    public function edit(shoppingCar $shoppingCar)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\shoppingCar  $shoppingCar
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, shoppingCar $shoppingCar)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\shoppingCar  $shoppingCar
     * @return \Illuminate\Http\Response
     */
    public function destroy(shoppingCar $shoppingCar)
    {
        //
    }
    public function Updated(Request $request)
    {
        $idUser = $request->input('idUser');
        $status = $request->input('status');

        $query = new shoppingCar;
        $query->status = $status;
        $query->idProduct = $request->input('idProduct');
        $query->idUser = $request->input('idUser');
        $query->save();
        $query = DB::select( "select p.id,p.name,p.price,p.photo,status,idProduct,s.idUser from
        shopping_cars s join
        products p on s.idProduct = p.id where s.idUser =? and status=?", [$idUser, $status]);
        if (empty($query)) {
            $query = [];
        }
        echo json_encode( $query);

    }
    public function creat(Request $request)
    {
        $id = $request->input('id');
        $status = $request->input('status');
        $query = shoppingCar::find($id);
        $query->id = $request->input('id');
        $query->idProduct = $request->input('idProduct');
        $query->idUser = $request->input('idUser');
        $query->status = $request->input('status');
        $query->save();
        $query = DB::select( "select s.id as ids,p.id,p.name,p.price,p.photo,status,idProduct,s.idUser from
        shopping_cars s join
        products p on s.idProduct = p.id where s.idUser =? and status=?", [$idUser, 'G']);
        if (empty($query)) {
            $query = [];
        }
        echo json_encode( $query);

    }
    public function search(Request $request)
    {

        $idUser = $request->input('idUser');
        $status = $request->input('status');
        if ($status = 'B') {
            $status = 'G';
            $query = DB::select( "select s.id as ids,p.id,p.name,p.price,p.photo,status,idProduct,s.idUser from
                                  shopping_cars s join
                                  products p on s.idProduct = p.id where s.idUser =? and status=?", [$idUser, $status]);
            if (empty($query)) {
                $query = [];
            }
            echo json_encode( $query);
            return;
        }
    }
}
