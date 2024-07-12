<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property string  $db_name
 * @property string  $col_name
 * @property string  $col_type
 * @property string  $col_length
 * @property string  $col_collation
 * @property string  $col_extra
 * @property string  $col_default
 * @property boolean $col_isNull
 */
class PmaCentralColumns extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'pma__central_columns';

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
        'col_name', 'col_type', 'col_length', 'col_collation', 'col_isNull', 'col_extra', 'col_default'
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
        'db_name' => 'string', 'col_name' => 'string', 'col_type' => 'string', 'col_length' => 'string', 'col_collation' => 'string', 'col_isNull' => 'boolean', 'col_extra' => 'string', 'col_default' => 'string'
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
