<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int    $page_nr
 * @property string $db_name
 * @property string $page_descr
 */
class PmaPdfPages extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'pma__pdf_pages';

    /**
     * The primary key for the model.
     *
     * @var string
     */
    protected $primaryKey = 'page_nr';

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = [
        'db_name', 'page_descr'
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
        'page_nr' => 'int', 'db_name' => 'string', 'page_descr' => 'string'
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
