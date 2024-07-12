<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int    $id
 * @property int    $age
 * @property string $name
 * @property string $breed
 * @property string $address
 * @property string $color
 * @property float  $height
 * @property float  $weight
 */
class Dogs extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'dogs';

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
        'name', 'breed', 'age', 'address', 'color', 'height', 'weight'
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
        'id' => 'int', 'name' => 'string', 'breed' => 'string', 'age' => 'int', 'address' => 'string', 'color' => 'string', 'height' => 'float', 'weight' => 'float'
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
