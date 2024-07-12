<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int    $id
 * @property string $db_name
 * @property string $table_name
 * @property string $column_name
 * @property string $comment
 * @property string $mimetype
 * @property string $transformation
 * @property string $transformation_options
 * @property string $input_transformation
 * @property string $input_transformation_options
 */
class PmaColumnInfo extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'pma__column_info';

    /**
     * The primary key for the model.
     *
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = [
        'db_name', 'table_name', 'column_name', 'comment', 'mimetype', 'transformation', 'transformation_options', 'input_transformation', 'input_transformation_options'
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
        'id' => 'int', 'db_name' => 'string', 'table_name' => 'string', 'column_name' => 'string', 'comment' => 'string', 'mimetype' => 'string', 'transformation' => 'string', 'transformation_options' => 'string', 'input_transformation' => 'string', 'input_transformation_options' => 'string'
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
