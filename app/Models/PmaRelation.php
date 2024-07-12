<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property string $master_db
 * @property string $master_table
 * @property string $master_field
 * @property string $foreign_db
 * @property string $foreign_table
 * @property string $foreign_field
 */
class PmaRelation extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'pma__relation';

    /**
     * The primary key for the model.
     *
     * @var string
     */
    protected $primaryKey = 'master_db';

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = [
        'master_table', 'master_field', 'foreign_db', 'foreign_table', 'foreign_field'
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
        'master_db' => 'string', 'master_table' => 'string', 'master_field' => 'string', 'foreign_db' => 'string', 'foreign_table' => 'string', 'foreign_field' => 'string'
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
