//Eloquent = Object Relational Mapping 


MIGRATIONS
Blueprints for Creations of DB tables - Version Control 
CRUD for Databases

MODELs
//     public static function find(int $id){
//         return Arr::first(static::all(), fn($job) =>$job['id'] == $id);
//     }


FACTORY 

/* Use a model factory to quickly scaffold example data 
*/
```
App\Models\User::factory()->create();
App\Models\User::factory(100)->create();

```