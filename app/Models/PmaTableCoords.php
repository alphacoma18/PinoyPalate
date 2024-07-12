<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property string $db_name
 * @property string $table_name
 * @property int    $pdf_page_number
 * @property float  $x
 * @property float  $y
 */
class PmaTableCoords extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'pma__table_coords';

    /**
     * The primary key for the model.
     *
     * @var string
     */
    protected $primaryKey = 'db_name';

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = [
        'table_name', 'pdf_page_number', 'x', 'y'
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
        'db_name' => 'string', 'table_name' => 'string', 'pdf_page_number' => 'int', 'x' => 'float', 'y' => 'float'
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
