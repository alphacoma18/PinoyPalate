<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property string $username
 * @property string $item_name
 * @property string $item_type
 * @property string $db_name
 * @property string $table_name
 */
class PmaNavigationhiding extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'pma__navigationhiding';

    /**
     * The primary key for the model.
     *
     * @var string
     */
    protected $primaryKey = 'username';

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = [
        'item_name', 'item_type', 'db_name', 'table_name'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'username' => 'string', 'item_name' => 'string', 'item_type' => 'string', 'db_name' => 'string', 'table_name' => 'string'
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = [
        
    ];

    /**
     * Indicates if the model should be timestamped.
     *
     * @var boolean
     */
    public $timestamps = false;

    // Scopes...

    // Functions ...

    // Relations ...
}
