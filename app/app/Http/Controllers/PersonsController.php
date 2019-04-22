<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class PersonsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = DB::select( "select * from users where email =? and password= ?", [$request->input('email'), $request->input('password')]);

        echo json_encode($query);
    }
    public function store(Request $request)
    {
        $query = DB::select( "select * from users where email =$request->input('email') and password=$request->input('password')");
        $query = DB::table('users')->where('email', $request->input('email'))->where('password',$request->input('password'))->first();
        echo json_encode( $query);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $query = new User;
        $query->name = $request->input('name');
        $query->email = $request->input('email');
        $query->password = $request->input('password');
        $query->save();
        echo json_encode($query);
    }
<<<<<<< HEAD
=======


>>>>>>> feature
   }
