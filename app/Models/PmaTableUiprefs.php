<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property string $username
 * @property string $db_name
 * @property string $table_name
 * @property string $prefs
 * @property int    $last_update
 */
class PmaTableUiprefs extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'pma__table_uiprefs';

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
        'db_name', 'table_name', 'prefs', 'last_update'
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
        'username' => 'string', 'db_name' => 'string', 'table_name' => 'string', 'prefs' => 'string', 'last_update' => 'timestamp'
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = [
        'last_update'
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
