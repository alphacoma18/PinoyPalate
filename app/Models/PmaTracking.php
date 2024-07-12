<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property string   $db_name
 * @property string   $table_name
 * @property string   $schema_snapshot
 * @property string   $schema_sql
 * @property string   $data_sql
 * @property int      $version
 * @property DateTime $date_created
 * @property DateTime $date_updated
 * @property boolean  $tracking_active
 */
class PmaTracking extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'pma__tracking';

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
        'table_name', 'version', 'date_created', 'date_updated', 'schema_snapshot', 'schema_sql', 'data_sql', 'tracking', 'tracking_active'
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
        'db_name' => 'string', 'table_name' => 'string', 'version' => 'int', 'date_created' => 'datetime', 'date_updated' => 'datetime', 'schema_snapshot' => 'string', 'schema_sql' => 'string', 'data_sql' => 'string', 'tracking_active' => 'boolean'
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = [
        'date_created', 'date_updated'
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
