
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Personnel
 * 
 */
export type Personnel = $Result.DefaultSelection<Prisma.$PersonnelPayload>
/**
 * Model Ingredient
 * 
 */
export type Ingredient = $Result.DefaultSelection<Prisma.$IngredientPayload>
/**
 * Model Step
 * 
 */
export type Step = $Result.DefaultSelection<Prisma.$StepPayload>
/**
 * Model Vintage
 * 
 */
export type Vintage = $Result.DefaultSelection<Prisma.$VintagePayload>
/**
 * Model VintageStep
 * 
 */
export type VintageStep = $Result.DefaultSelection<Prisma.$VintageStepPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Format
 * 
 */
export type Format = $Result.DefaultSelection<Prisma.$FormatPayload>
/**
 * Model TicketLine
 * 
 */
export type TicketLine = $Result.DefaultSelection<Prisma.$TicketLinePayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Delivery
 * 
 */
export type Delivery = $Result.DefaultSelection<Prisma.$DeliveryPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  Administrateur: 'Administrateur',
  Producteur: 'Producteur',
  Vendeur: 'Vendeur',
  Caissier: 'Caissier'
};

export type Role = (typeof Role)[keyof typeof Role]


export const DurationUnit: {
  minutes: 'minutes',
  heures: 'heures',
  jours: 'jours'
};

export type DurationUnit = (typeof DurationUnit)[keyof typeof DurationUnit]


export const TicketState: {
  Payé: 'Payé',
  Impayé: 'Impayé'
};

export type TicketState = (typeof TicketState)[keyof typeof TicketState]


export const DeliveryState: {
  Livré: 'Livré',
  NonLivré: 'NonLivré'
};

export type DeliveryState = (typeof DeliveryState)[keyof typeof DeliveryState]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type DurationUnit = $Enums.DurationUnit

export const DurationUnit: typeof $Enums.DurationUnit

export type TicketState = $Enums.TicketState

export const TicketState: typeof $Enums.TicketState

export type DeliveryState = $Enums.DeliveryState

export const DeliveryState: typeof $Enums.DeliveryState

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Personnel
 * const personnel = await prisma.personnel.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Personnel
   * const personnel = await prisma.personnel.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.personnel`: Exposes CRUD operations for the **Personnel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Personnel
    * const personnel = await prisma.personnel.findMany()
    * ```
    */
  get personnel(): Prisma.PersonnelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingredient`: Exposes CRUD operations for the **Ingredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingredients
    * const ingredients = await prisma.ingredient.findMany()
    * ```
    */
  get ingredient(): Prisma.IngredientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.step`: Exposes CRUD operations for the **Step** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Steps
    * const steps = await prisma.step.findMany()
    * ```
    */
  get step(): Prisma.StepDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vintage`: Exposes CRUD operations for the **Vintage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vintages
    * const vintages = await prisma.vintage.findMany()
    * ```
    */
  get vintage(): Prisma.VintageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vintageStep`: Exposes CRUD operations for the **VintageStep** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VintageSteps
    * const vintageSteps = await prisma.vintageStep.findMany()
    * ```
    */
  get vintageStep(): Prisma.VintageStepDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.format`: Exposes CRUD operations for the **Format** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Formats
    * const formats = await prisma.format.findMany()
    * ```
    */
  get format(): Prisma.FormatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketLine`: Exposes CRUD operations for the **TicketLine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketLines
    * const ticketLines = await prisma.ticketLine.findMany()
    * ```
    */
  get ticketLine(): Prisma.TicketLineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.delivery`: Exposes CRUD operations for the **Delivery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deliveries
    * const deliveries = await prisma.delivery.findMany()
    * ```
    */
  get delivery(): Prisma.DeliveryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Personnel: 'Personnel',
    Ingredient: 'Ingredient',
    Step: 'Step',
    Vintage: 'Vintage',
    VintageStep: 'VintageStep',
    Product: 'Product',
    Format: 'Format',
    TicketLine: 'TicketLine',
    Ticket: 'Ticket',
    Client: 'Client',
    Delivery: 'Delivery',
    Payment: 'Payment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "personnel" | "ingredient" | "step" | "vintage" | "vintageStep" | "product" | "format" | "ticketLine" | "ticket" | "client" | "delivery" | "payment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Personnel: {
        payload: Prisma.$PersonnelPayload<ExtArgs>
        fields: Prisma.PersonnelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonnelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonnelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonnelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonnelPayload>
          }
          findFirst: {
            args: Prisma.PersonnelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonnelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonnelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonnelPayload>
          }
          findMany: {
            args: Prisma.PersonnelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonnelPayload>[]
          }
          create: {
            args: Prisma.PersonnelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonnelPayload>
          }
          createMany: {
            args: Prisma.PersonnelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonnelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonnelPayload>[]
          }
          delete: {
            args: Prisma.PersonnelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonnelPayload>
          }
          update: {
            args: Prisma.PersonnelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonnelPayload>
          }
          deleteMany: {
            args: Prisma.PersonnelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonnelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonnelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonnelPayload>[]
          }
          upsert: {
            args: Prisma.PersonnelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonnelPayload>
          }
          aggregate: {
            args: Prisma.PersonnelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonnel>
          }
          groupBy: {
            args: Prisma.PersonnelGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonnelGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonnelCountArgs<ExtArgs>
            result: $Utils.Optional<PersonnelCountAggregateOutputType> | number
          }
        }
      }
      Ingredient: {
        payload: Prisma.$IngredientPayload<ExtArgs>
        fields: Prisma.IngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngredientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngredientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          findFirst: {
            args: Prisma.IngredientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngredientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          findMany: {
            args: Prisma.IngredientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          create: {
            args: Prisma.IngredientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          createMany: {
            args: Prisma.IngredientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngredientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          delete: {
            args: Prisma.IngredientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          update: {
            args: Prisma.IngredientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          deleteMany: {
            args: Prisma.IngredientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngredientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IngredientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          upsert: {
            args: Prisma.IngredientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          aggregate: {
            args: Prisma.IngredientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngredient>
          }
          groupBy: {
            args: Prisma.IngredientGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngredientCountArgs<ExtArgs>
            result: $Utils.Optional<IngredientCountAggregateOutputType> | number
          }
        }
      }
      Step: {
        payload: Prisma.$StepPayload<ExtArgs>
        fields: Prisma.StepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StepFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StepFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          findFirst: {
            args: Prisma.StepFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StepFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          findMany: {
            args: Prisma.StepFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>[]
          }
          create: {
            args: Prisma.StepCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          createMany: {
            args: Prisma.StepCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StepCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>[]
          }
          delete: {
            args: Prisma.StepDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          update: {
            args: Prisma.StepUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          deleteMany: {
            args: Prisma.StepDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StepUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StepUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>[]
          }
          upsert: {
            args: Prisma.StepUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          aggregate: {
            args: Prisma.StepAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStep>
          }
          groupBy: {
            args: Prisma.StepGroupByArgs<ExtArgs>
            result: $Utils.Optional<StepGroupByOutputType>[]
          }
          count: {
            args: Prisma.StepCountArgs<ExtArgs>
            result: $Utils.Optional<StepCountAggregateOutputType> | number
          }
        }
      }
      Vintage: {
        payload: Prisma.$VintagePayload<ExtArgs>
        fields: Prisma.VintageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VintageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VintagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VintageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VintagePayload>
          }
          findFirst: {
            args: Prisma.VintageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VintagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VintageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VintagePayload>
          }
          findMany: {
            args: Prisma.VintageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VintagePayload>[]
          }
          create: {
            args: Prisma.VintageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VintagePayload>
          }
          createMany: {
            args: Prisma.VintageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VintageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VintagePayload>[]
          }
          delete: {
            args: Prisma.VintageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VintagePayload>
          }
          update: {
            args: Prisma.VintageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VintagePayload>
          }
          deleteMany: {
            args: Prisma.VintageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VintageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VintageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VintagePayload>[]
          }
          upsert: {
            args: Prisma.VintageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VintagePayload>
          }
          aggregate: {
            args: Prisma.VintageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVintage>
          }
          groupBy: {
            args: Prisma.VintageGroupByArgs<ExtArgs>
            result: $Utils.Optional<VintageGroupByOutputType>[]
          }
          count: {
            args: Prisma.VintageCountArgs<ExtArgs>
            result: $Utils.Optional<VintageCountAggregateOutputType> | number
          }
        }
      }
      VintageStep: {
        payload: Prisma.$VintageStepPayload<ExtArgs>
        fields: Prisma.VintageStepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VintageStepFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VintageStepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VintageStepFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VintageStepPayload>
          }
          findFirst: {
            args: Prisma.VintageStepFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VintageStepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VintageStepFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VintageStepPayload>
          }
          findMany: {
            args: Prisma.VintageStepFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VintageStepPayload>[]
          }
          create: {
            args: Prisma.VintageStepCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VintageStepPayload>
          }
          createMany: {
            args: Prisma.VintageStepCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VintageStepCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VintageStepPayload>[]
          }
          delete: {
            args: Prisma.VintageStepDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VintageStepPayload>
          }
          update: {
            args: Prisma.VintageStepUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VintageStepPayload>
          }
          deleteMany: {
            args: Prisma.VintageStepDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VintageStepUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VintageStepUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VintageStepPayload>[]
          }
          upsert: {
            args: Prisma.VintageStepUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VintageStepPayload>
          }
          aggregate: {
            args: Prisma.VintageStepAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVintageStep>
          }
          groupBy: {
            args: Prisma.VintageStepGroupByArgs<ExtArgs>
            result: $Utils.Optional<VintageStepGroupByOutputType>[]
          }
          count: {
            args: Prisma.VintageStepCountArgs<ExtArgs>
            result: $Utils.Optional<VintageStepCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Format: {
        payload: Prisma.$FormatPayload<ExtArgs>
        fields: Prisma.FormatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormatPayload>
          }
          findFirst: {
            args: Prisma.FormatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormatPayload>
          }
          findMany: {
            args: Prisma.FormatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormatPayload>[]
          }
          create: {
            args: Prisma.FormatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormatPayload>
          }
          createMany: {
            args: Prisma.FormatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormatPayload>[]
          }
          delete: {
            args: Prisma.FormatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormatPayload>
          }
          update: {
            args: Prisma.FormatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormatPayload>
          }
          deleteMany: {
            args: Prisma.FormatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormatPayload>[]
          }
          upsert: {
            args: Prisma.FormatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormatPayload>
          }
          aggregate: {
            args: Prisma.FormatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormat>
          }
          groupBy: {
            args: Prisma.FormatGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormatGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormatCountArgs<ExtArgs>
            result: $Utils.Optional<FormatCountAggregateOutputType> | number
          }
        }
      }
      TicketLine: {
        payload: Prisma.$TicketLinePayload<ExtArgs>
        fields: Prisma.TicketLineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketLineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketLinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketLineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketLinePayload>
          }
          findFirst: {
            args: Prisma.TicketLineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketLinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketLineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketLinePayload>
          }
          findMany: {
            args: Prisma.TicketLineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketLinePayload>[]
          }
          create: {
            args: Prisma.TicketLineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketLinePayload>
          }
          createMany: {
            args: Prisma.TicketLineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketLineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketLinePayload>[]
          }
          delete: {
            args: Prisma.TicketLineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketLinePayload>
          }
          update: {
            args: Prisma.TicketLineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketLinePayload>
          }
          deleteMany: {
            args: Prisma.TicketLineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketLineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketLineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketLinePayload>[]
          }
          upsert: {
            args: Prisma.TicketLineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketLinePayload>
          }
          aggregate: {
            args: Prisma.TicketLineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketLine>
          }
          groupBy: {
            args: Prisma.TicketLineGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketLineGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketLineCountArgs<ExtArgs>
            result: $Utils.Optional<TicketLineCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Delivery: {
        payload: Prisma.$DeliveryPayload<ExtArgs>
        fields: Prisma.DeliveryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeliveryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeliveryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          findFirst: {
            args: Prisma.DeliveryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeliveryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          findMany: {
            args: Prisma.DeliveryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>[]
          }
          create: {
            args: Prisma.DeliveryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          createMany: {
            args: Prisma.DeliveryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeliveryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>[]
          }
          delete: {
            args: Prisma.DeliveryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          update: {
            args: Prisma.DeliveryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          deleteMany: {
            args: Prisma.DeliveryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeliveryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeliveryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>[]
          }
          upsert: {
            args: Prisma.DeliveryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          aggregate: {
            args: Prisma.DeliveryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDelivery>
          }
          groupBy: {
            args: Prisma.DeliveryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeliveryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeliveryCountArgs<ExtArgs>
            result: $Utils.Optional<DeliveryCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    personnel?: PersonnelOmit
    ingredient?: IngredientOmit
    step?: StepOmit
    vintage?: VintageOmit
    vintageStep?: VintageStepOmit
    product?: ProductOmit
    format?: FormatOmit
    ticketLine?: TicketLineOmit
    ticket?: TicketOmit
    client?: ClientOmit
    delivery?: DeliveryOmit
    payment?: PaymentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PersonnelCountOutputType
   */

  export type PersonnelCountOutputType = {
    ingredients: number
    steps: number
    tickets: number
    payments: number
  }

  export type PersonnelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | PersonnelCountOutputTypeCountIngredientsArgs
    steps?: boolean | PersonnelCountOutputTypeCountStepsArgs
    tickets?: boolean | PersonnelCountOutputTypeCountTicketsArgs
    payments?: boolean | PersonnelCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * PersonnelCountOutputType without action
   */
  export type PersonnelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonnelCountOutputType
     */
    select?: PersonnelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PersonnelCountOutputType without action
   */
  export type PersonnelCountOutputTypeCountIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientWhereInput
  }

  /**
   * PersonnelCountOutputType without action
   */
  export type PersonnelCountOutputTypeCountStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepWhereInput
  }

  /**
   * PersonnelCountOutputType without action
   */
  export type PersonnelCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * PersonnelCountOutputType without action
   */
  export type PersonnelCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type StepCountOutputType
   */

  export type StepCountOutputType = {
    vintages: number
  }

  export type StepCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vintages?: boolean | StepCountOutputTypeCountVintagesArgs
  }

  // Custom InputTypes
  /**
   * StepCountOutputType without action
   */
  export type StepCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepCountOutputType
     */
    select?: StepCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StepCountOutputType without action
   */
  export type StepCountOutputTypeCountVintagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VintageStepWhereInput
  }


  /**
   * Count Type VintageCountOutputType
   */

  export type VintageCountOutputType = {
    steps: number
    products: number
  }

  export type VintageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    steps?: boolean | VintageCountOutputTypeCountStepsArgs
    products?: boolean | VintageCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * VintageCountOutputType without action
   */
  export type VintageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VintageCountOutputType
     */
    select?: VintageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VintageCountOutputType without action
   */
  export type VintageCountOutputTypeCountStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VintageStepWhereInput
  }

  /**
   * VintageCountOutputType without action
   */
  export type VintageCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    ticketLines: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticketLines?: boolean | ProductCountOutputTypeCountTicketLinesArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountTicketLinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketLineWhereInput
  }


  /**
   * Count Type FormatCountOutputType
   */

  export type FormatCountOutputType = {
    products: number
  }

  export type FormatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | FormatCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * FormatCountOutputType without action
   */
  export type FormatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormatCountOutputType
     */
    select?: FormatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormatCountOutputType without action
   */
  export type FormatCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type TicketCountOutputType
   */

  export type TicketCountOutputType = {
    ticketLines: number
  }

  export type TicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticketLines?: boolean | TicketCountOutputTypeCountTicketLinesArgs
  }

  // Custom InputTypes
  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCountOutputType
     */
    select?: TicketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountTicketLinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketLineWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    tickets: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | ClientCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Personnel
   */

  export type AggregatePersonnel = {
    _count: PersonnelCountAggregateOutputType | null
    _min: PersonnelMinAggregateOutputType | null
    _max: PersonnelMaxAggregateOutputType | null
  }

  export type PersonnelMinAggregateOutputType = {
    personnelId: string | null
    name: string | null
    lastName: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type PersonnelMaxAggregateOutputType = {
    personnelId: string | null
    name: string | null
    lastName: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type PersonnelCountAggregateOutputType = {
    personnelId: number
    name: number
    lastName: number
    email: number
    password: number
    role: number
    createdAt: number
    _all: number
  }


  export type PersonnelMinAggregateInputType = {
    personnelId?: true
    name?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type PersonnelMaxAggregateInputType = {
    personnelId?: true
    name?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type PersonnelCountAggregateInputType = {
    personnelId?: true
    name?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type PersonnelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Personnel to aggregate.
     */
    where?: PersonnelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personnel to fetch.
     */
    orderBy?: PersonnelOrderByWithRelationInput | PersonnelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonnelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personnel from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personnel.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Personnel
    **/
    _count?: true | PersonnelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonnelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonnelMaxAggregateInputType
  }

  export type GetPersonnelAggregateType<T extends PersonnelAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonnel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonnel[P]>
      : GetScalarType<T[P], AggregatePersonnel[P]>
  }




  export type PersonnelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonnelWhereInput
    orderBy?: PersonnelOrderByWithAggregationInput | PersonnelOrderByWithAggregationInput[]
    by: PersonnelScalarFieldEnum[] | PersonnelScalarFieldEnum
    having?: PersonnelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonnelCountAggregateInputType | true
    _min?: PersonnelMinAggregateInputType
    _max?: PersonnelMaxAggregateInputType
  }

  export type PersonnelGroupByOutputType = {
    personnelId: string
    name: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    _count: PersonnelCountAggregateOutputType | null
    _min: PersonnelMinAggregateOutputType | null
    _max: PersonnelMaxAggregateOutputType | null
  }

  type GetPersonnelGroupByPayload<T extends PersonnelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonnelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonnelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonnelGroupByOutputType[P]>
            : GetScalarType<T[P], PersonnelGroupByOutputType[P]>
        }
      >
    >


  export type PersonnelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    personnelId?: boolean
    name?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    ingredients?: boolean | Personnel$ingredientsArgs<ExtArgs>
    steps?: boolean | Personnel$stepsArgs<ExtArgs>
    tickets?: boolean | Personnel$ticketsArgs<ExtArgs>
    payments?: boolean | Personnel$paymentsArgs<ExtArgs>
    _count?: boolean | PersonnelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personnel"]>

  export type PersonnelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    personnelId?: boolean
    name?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["personnel"]>

  export type PersonnelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    personnelId?: boolean
    name?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["personnel"]>

  export type PersonnelSelectScalar = {
    personnelId?: boolean
    name?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type PersonnelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"personnelId" | "name" | "lastName" | "email" | "password" | "role" | "createdAt", ExtArgs["result"]["personnel"]>
  export type PersonnelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | Personnel$ingredientsArgs<ExtArgs>
    steps?: boolean | Personnel$stepsArgs<ExtArgs>
    tickets?: boolean | Personnel$ticketsArgs<ExtArgs>
    payments?: boolean | Personnel$paymentsArgs<ExtArgs>
    _count?: boolean | PersonnelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PersonnelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PersonnelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PersonnelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Personnel"
    objects: {
      ingredients: Prisma.$IngredientPayload<ExtArgs>[]
      steps: Prisma.$StepPayload<ExtArgs>[]
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      personnelId: string
      name: string
      lastName: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["personnel"]>
    composites: {}
  }

  type PersonnelGetPayload<S extends boolean | null | undefined | PersonnelDefaultArgs> = $Result.GetResult<Prisma.$PersonnelPayload, S>

  type PersonnelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonnelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonnelCountAggregateInputType | true
    }

  export interface PersonnelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Personnel'], meta: { name: 'Personnel' } }
    /**
     * Find zero or one Personnel that matches the filter.
     * @param {PersonnelFindUniqueArgs} args - Arguments to find a Personnel
     * @example
     * // Get one Personnel
     * const personnel = await prisma.personnel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonnelFindUniqueArgs>(args: SelectSubset<T, PersonnelFindUniqueArgs<ExtArgs>>): Prisma__PersonnelClient<$Result.GetResult<Prisma.$PersonnelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Personnel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonnelFindUniqueOrThrowArgs} args - Arguments to find a Personnel
     * @example
     * // Get one Personnel
     * const personnel = await prisma.personnel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonnelFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonnelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonnelClient<$Result.GetResult<Prisma.$PersonnelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personnel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonnelFindFirstArgs} args - Arguments to find a Personnel
     * @example
     * // Get one Personnel
     * const personnel = await prisma.personnel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonnelFindFirstArgs>(args?: SelectSubset<T, PersonnelFindFirstArgs<ExtArgs>>): Prisma__PersonnelClient<$Result.GetResult<Prisma.$PersonnelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personnel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonnelFindFirstOrThrowArgs} args - Arguments to find a Personnel
     * @example
     * // Get one Personnel
     * const personnel = await prisma.personnel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonnelFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonnelFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonnelClient<$Result.GetResult<Prisma.$PersonnelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Personnel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonnelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Personnel
     * const personnel = await prisma.personnel.findMany()
     * 
     * // Get first 10 Personnel
     * const personnel = await prisma.personnel.findMany({ take: 10 })
     * 
     * // Only select the `personnelId`
     * const personnelWithPersonnelIdOnly = await prisma.personnel.findMany({ select: { personnelId: true } })
     * 
     */
    findMany<T extends PersonnelFindManyArgs>(args?: SelectSubset<T, PersonnelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonnelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Personnel.
     * @param {PersonnelCreateArgs} args - Arguments to create a Personnel.
     * @example
     * // Create one Personnel
     * const Personnel = await prisma.personnel.create({
     *   data: {
     *     // ... data to create a Personnel
     *   }
     * })
     * 
     */
    create<T extends PersonnelCreateArgs>(args: SelectSubset<T, PersonnelCreateArgs<ExtArgs>>): Prisma__PersonnelClient<$Result.GetResult<Prisma.$PersonnelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Personnel.
     * @param {PersonnelCreateManyArgs} args - Arguments to create many Personnel.
     * @example
     * // Create many Personnel
     * const personnel = await prisma.personnel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonnelCreateManyArgs>(args?: SelectSubset<T, PersonnelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Personnel and returns the data saved in the database.
     * @param {PersonnelCreateManyAndReturnArgs} args - Arguments to create many Personnel.
     * @example
     * // Create many Personnel
     * const personnel = await prisma.personnel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Personnel and only return the `personnelId`
     * const personnelWithPersonnelIdOnly = await prisma.personnel.createManyAndReturn({
     *   select: { personnelId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonnelCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonnelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonnelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Personnel.
     * @param {PersonnelDeleteArgs} args - Arguments to delete one Personnel.
     * @example
     * // Delete one Personnel
     * const Personnel = await prisma.personnel.delete({
     *   where: {
     *     // ... filter to delete one Personnel
     *   }
     * })
     * 
     */
    delete<T extends PersonnelDeleteArgs>(args: SelectSubset<T, PersonnelDeleteArgs<ExtArgs>>): Prisma__PersonnelClient<$Result.GetResult<Prisma.$PersonnelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Personnel.
     * @param {PersonnelUpdateArgs} args - Arguments to update one Personnel.
     * @example
     * // Update one Personnel
     * const personnel = await prisma.personnel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonnelUpdateArgs>(args: SelectSubset<T, PersonnelUpdateArgs<ExtArgs>>): Prisma__PersonnelClient<$Result.GetResult<Prisma.$PersonnelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Personnel.
     * @param {PersonnelDeleteManyArgs} args - Arguments to filter Personnel to delete.
     * @example
     * // Delete a few Personnel
     * const { count } = await prisma.personnel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonnelDeleteManyArgs>(args?: SelectSubset<T, PersonnelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personnel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonnelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Personnel
     * const personnel = await prisma.personnel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonnelUpdateManyArgs>(args: SelectSubset<T, PersonnelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personnel and returns the data updated in the database.
     * @param {PersonnelUpdateManyAndReturnArgs} args - Arguments to update many Personnel.
     * @example
     * // Update many Personnel
     * const personnel = await prisma.personnel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Personnel and only return the `personnelId`
     * const personnelWithPersonnelIdOnly = await prisma.personnel.updateManyAndReturn({
     *   select: { personnelId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PersonnelUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonnelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonnelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Personnel.
     * @param {PersonnelUpsertArgs} args - Arguments to update or create a Personnel.
     * @example
     * // Update or create a Personnel
     * const personnel = await prisma.personnel.upsert({
     *   create: {
     *     // ... data to create a Personnel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Personnel we want to update
     *   }
     * })
     */
    upsert<T extends PersonnelUpsertArgs>(args: SelectSubset<T, PersonnelUpsertArgs<ExtArgs>>): Prisma__PersonnelClient<$Result.GetResult<Prisma.$PersonnelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Personnel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonnelCountArgs} args - Arguments to filter Personnel to count.
     * @example
     * // Count the number of Personnel
     * const count = await prisma.personnel.count({
     *   where: {
     *     // ... the filter for the Personnel we want to count
     *   }
     * })
    **/
    count<T extends PersonnelCountArgs>(
      args?: Subset<T, PersonnelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonnelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Personnel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonnelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonnelAggregateArgs>(args: Subset<T, PersonnelAggregateArgs>): Prisma.PrismaPromise<GetPersonnelAggregateType<T>>

    /**
     * Group by Personnel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonnelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonnelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonnelGroupByArgs['orderBy'] }
        : { orderBy?: PersonnelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonnelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonnelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Personnel model
   */
  readonly fields: PersonnelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Personnel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonnelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingredients<T extends Personnel$ingredientsArgs<ExtArgs> = {}>(args?: Subset<T, Personnel$ingredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    steps<T extends Personnel$stepsArgs<ExtArgs> = {}>(args?: Subset<T, Personnel$stepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends Personnel$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Personnel$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Personnel$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Personnel$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Personnel model
   */
  interface PersonnelFieldRefs {
    readonly personnelId: FieldRef<"Personnel", 'String'>
    readonly name: FieldRef<"Personnel", 'String'>
    readonly lastName: FieldRef<"Personnel", 'String'>
    readonly email: FieldRef<"Personnel", 'String'>
    readonly password: FieldRef<"Personnel", 'String'>
    readonly role: FieldRef<"Personnel", 'Role'>
    readonly createdAt: FieldRef<"Personnel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Personnel findUnique
   */
  export type PersonnelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personnel
     */
    select?: PersonnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personnel
     */
    omit?: PersonnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonnelInclude<ExtArgs> | null
    /**
     * Filter, which Personnel to fetch.
     */
    where: PersonnelWhereUniqueInput
  }

  /**
   * Personnel findUniqueOrThrow
   */
  export type PersonnelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personnel
     */
    select?: PersonnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personnel
     */
    omit?: PersonnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonnelInclude<ExtArgs> | null
    /**
     * Filter, which Personnel to fetch.
     */
    where: PersonnelWhereUniqueInput
  }

  /**
   * Personnel findFirst
   */
  export type PersonnelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personnel
     */
    select?: PersonnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personnel
     */
    omit?: PersonnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonnelInclude<ExtArgs> | null
    /**
     * Filter, which Personnel to fetch.
     */
    where?: PersonnelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personnel to fetch.
     */
    orderBy?: PersonnelOrderByWithRelationInput | PersonnelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personnel.
     */
    cursor?: PersonnelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personnel from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personnel.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personnel.
     */
    distinct?: PersonnelScalarFieldEnum | PersonnelScalarFieldEnum[]
  }

  /**
   * Personnel findFirstOrThrow
   */
  export type PersonnelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personnel
     */
    select?: PersonnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personnel
     */
    omit?: PersonnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonnelInclude<ExtArgs> | null
    /**
     * Filter, which Personnel to fetch.
     */
    where?: PersonnelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personnel to fetch.
     */
    orderBy?: PersonnelOrderByWithRelationInput | PersonnelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personnel.
     */
    cursor?: PersonnelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personnel from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personnel.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personnel.
     */
    distinct?: PersonnelScalarFieldEnum | PersonnelScalarFieldEnum[]
  }

  /**
   * Personnel findMany
   */
  export type PersonnelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personnel
     */
    select?: PersonnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personnel
     */
    omit?: PersonnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonnelInclude<ExtArgs> | null
    /**
     * Filter, which Personnel to fetch.
     */
    where?: PersonnelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personnel to fetch.
     */
    orderBy?: PersonnelOrderByWithRelationInput | PersonnelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Personnel.
     */
    cursor?: PersonnelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personnel from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personnel.
     */
    skip?: number
    distinct?: PersonnelScalarFieldEnum | PersonnelScalarFieldEnum[]
  }

  /**
   * Personnel create
   */
  export type PersonnelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personnel
     */
    select?: PersonnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personnel
     */
    omit?: PersonnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonnelInclude<ExtArgs> | null
    /**
     * The data needed to create a Personnel.
     */
    data: XOR<PersonnelCreateInput, PersonnelUncheckedCreateInput>
  }

  /**
   * Personnel createMany
   */
  export type PersonnelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Personnel.
     */
    data: PersonnelCreateManyInput | PersonnelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Personnel createManyAndReturn
   */
  export type PersonnelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personnel
     */
    select?: PersonnelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Personnel
     */
    omit?: PersonnelOmit<ExtArgs> | null
    /**
     * The data used to create many Personnel.
     */
    data: PersonnelCreateManyInput | PersonnelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Personnel update
   */
  export type PersonnelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personnel
     */
    select?: PersonnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personnel
     */
    omit?: PersonnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonnelInclude<ExtArgs> | null
    /**
     * The data needed to update a Personnel.
     */
    data: XOR<PersonnelUpdateInput, PersonnelUncheckedUpdateInput>
    /**
     * Choose, which Personnel to update.
     */
    where: PersonnelWhereUniqueInput
  }

  /**
   * Personnel updateMany
   */
  export type PersonnelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Personnel.
     */
    data: XOR<PersonnelUpdateManyMutationInput, PersonnelUncheckedUpdateManyInput>
    /**
     * Filter which Personnel to update
     */
    where?: PersonnelWhereInput
    /**
     * Limit how many Personnel to update.
     */
    limit?: number
  }

  /**
   * Personnel updateManyAndReturn
   */
  export type PersonnelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personnel
     */
    select?: PersonnelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Personnel
     */
    omit?: PersonnelOmit<ExtArgs> | null
    /**
     * The data used to update Personnel.
     */
    data: XOR<PersonnelUpdateManyMutationInput, PersonnelUncheckedUpdateManyInput>
    /**
     * Filter which Personnel to update
     */
    where?: PersonnelWhereInput
    /**
     * Limit how many Personnel to update.
     */
    limit?: number
  }

  /**
   * Personnel upsert
   */
  export type PersonnelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personnel
     */
    select?: PersonnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personnel
     */
    omit?: PersonnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonnelInclude<ExtArgs> | null
    /**
     * The filter to search for the Personnel to update in case it exists.
     */
    where: PersonnelWhereUniqueInput
    /**
     * In case the Personnel found by the `where` argument doesn't exist, create a new Personnel with this data.
     */
    create: XOR<PersonnelCreateInput, PersonnelUncheckedCreateInput>
    /**
     * In case the Personnel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonnelUpdateInput, PersonnelUncheckedUpdateInput>
  }

  /**
   * Personnel delete
   */
  export type PersonnelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personnel
     */
    select?: PersonnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personnel
     */
    omit?: PersonnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonnelInclude<ExtArgs> | null
    /**
     * Filter which Personnel to delete.
     */
    where: PersonnelWhereUniqueInput
  }

  /**
   * Personnel deleteMany
   */
  export type PersonnelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Personnel to delete
     */
    where?: PersonnelWhereInput
    /**
     * Limit how many Personnel to delete.
     */
    limit?: number
  }

  /**
   * Personnel.ingredients
   */
  export type Personnel$ingredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    where?: IngredientWhereInput
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    cursor?: IngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Personnel.steps
   */
  export type Personnel$stepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    where?: StepWhereInput
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    cursor?: StepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Personnel.tickets
   */
  export type Personnel$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Personnel.payments
   */
  export type Personnel$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Personnel without action
   */
  export type PersonnelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personnel
     */
    select?: PersonnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personnel
     */
    omit?: PersonnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonnelInclude<ExtArgs> | null
  }


  /**
   * Model Ingredient
   */

  export type AggregateIngredient = {
    _count: IngredientCountAggregateOutputType | null
    _avg: IngredientAvgAggregateOutputType | null
    _sum: IngredientSumAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  export type IngredientAvgAggregateOutputType = {
    ingredientId: number | null
    quantity: Decimal | null
    threshold: Decimal | null
  }

  export type IngredientSumAggregateOutputType = {
    ingredientId: number | null
    quantity: Decimal | null
    threshold: Decimal | null
  }

  export type IngredientMinAggregateOutputType = {
    ingredientId: number | null
    productorId: string | null
    label: string | null
    quantity: Decimal | null
    threshold: Decimal | null
    provider: string | null
    createdAt: Date | null
  }

  export type IngredientMaxAggregateOutputType = {
    ingredientId: number | null
    productorId: string | null
    label: string | null
    quantity: Decimal | null
    threshold: Decimal | null
    provider: string | null
    createdAt: Date | null
  }

  export type IngredientCountAggregateOutputType = {
    ingredientId: number
    productorId: number
    label: number
    quantity: number
    threshold: number
    provider: number
    createdAt: number
    _all: number
  }


  export type IngredientAvgAggregateInputType = {
    ingredientId?: true
    quantity?: true
    threshold?: true
  }

  export type IngredientSumAggregateInputType = {
    ingredientId?: true
    quantity?: true
    threshold?: true
  }

  export type IngredientMinAggregateInputType = {
    ingredientId?: true
    productorId?: true
    label?: true
    quantity?: true
    threshold?: true
    provider?: true
    createdAt?: true
  }

  export type IngredientMaxAggregateInputType = {
    ingredientId?: true
    productorId?: true
    label?: true
    quantity?: true
    threshold?: true
    provider?: true
    createdAt?: true
  }

  export type IngredientCountAggregateInputType = {
    ingredientId?: true
    productorId?: true
    label?: true
    quantity?: true
    threshold?: true
    provider?: true
    createdAt?: true
    _all?: true
  }

  export type IngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredient to aggregate.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ingredients
    **/
    _count?: true | IngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngredientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngredientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredientMaxAggregateInputType
  }

  export type GetIngredientAggregateType<T extends IngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredient[P]>
      : GetScalarType<T[P], AggregateIngredient[P]>
  }




  export type IngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientWhereInput
    orderBy?: IngredientOrderByWithAggregationInput | IngredientOrderByWithAggregationInput[]
    by: IngredientScalarFieldEnum[] | IngredientScalarFieldEnum
    having?: IngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredientCountAggregateInputType | true
    _avg?: IngredientAvgAggregateInputType
    _sum?: IngredientSumAggregateInputType
    _min?: IngredientMinAggregateInputType
    _max?: IngredientMaxAggregateInputType
  }

  export type IngredientGroupByOutputType = {
    ingredientId: number
    productorId: string
    label: string
    quantity: Decimal
    threshold: Decimal
    provider: string
    createdAt: Date
    _count: IngredientCountAggregateOutputType | null
    _avg: IngredientAvgAggregateOutputType | null
    _sum: IngredientSumAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  type GetIngredientGroupByPayload<T extends IngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientGroupByOutputType[P]>
        }
      >
    >


  export type IngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ingredientId?: boolean
    productorId?: boolean
    label?: boolean
    quantity?: boolean
    threshold?: boolean
    provider?: boolean
    createdAt?: boolean
    productor?: boolean | PersonnelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ingredientId?: boolean
    productorId?: boolean
    label?: boolean
    quantity?: boolean
    threshold?: boolean
    provider?: boolean
    createdAt?: boolean
    productor?: boolean | PersonnelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ingredientId?: boolean
    productorId?: boolean
    label?: boolean
    quantity?: boolean
    threshold?: boolean
    provider?: boolean
    createdAt?: boolean
    productor?: boolean | PersonnelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectScalar = {
    ingredientId?: boolean
    productorId?: boolean
    label?: boolean
    quantity?: boolean
    threshold?: boolean
    provider?: boolean
    createdAt?: boolean
  }

  export type IngredientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ingredientId" | "productorId" | "label" | "quantity" | "threshold" | "provider" | "createdAt", ExtArgs["result"]["ingredient"]>
  export type IngredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productor?: boolean | PersonnelDefaultArgs<ExtArgs>
  }
  export type IngredientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productor?: boolean | PersonnelDefaultArgs<ExtArgs>
  }
  export type IngredientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productor?: boolean | PersonnelDefaultArgs<ExtArgs>
  }

  export type $IngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ingredient"
    objects: {
      productor: Prisma.$PersonnelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ingredientId: number
      productorId: string
      label: string
      quantity: Prisma.Decimal
      threshold: Prisma.Decimal
      provider: string
      createdAt: Date
    }, ExtArgs["result"]["ingredient"]>
    composites: {}
  }

  type IngredientGetPayload<S extends boolean | null | undefined | IngredientDefaultArgs> = $Result.GetResult<Prisma.$IngredientPayload, S>

  type IngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IngredientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngredientCountAggregateInputType | true
    }

  export interface IngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ingredient'], meta: { name: 'Ingredient' } }
    /**
     * Find zero or one Ingredient that matches the filter.
     * @param {IngredientFindUniqueArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngredientFindUniqueArgs>(args: SelectSubset<T, IngredientFindUniqueArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingredient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IngredientFindUniqueOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngredientFindUniqueOrThrowArgs>(args: SelectSubset<T, IngredientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngredientFindFirstArgs>(args?: SelectSubset<T, IngredientFindFirstArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngredientFindFirstOrThrowArgs>(args?: SelectSubset<T, IngredientFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredients
     * const ingredients = await prisma.ingredient.findMany()
     * 
     * // Get first 10 Ingredients
     * const ingredients = await prisma.ingredient.findMany({ take: 10 })
     * 
     * // Only select the `ingredientId`
     * const ingredientWithIngredientIdOnly = await prisma.ingredient.findMany({ select: { ingredientId: true } })
     * 
     */
    findMany<T extends IngredientFindManyArgs>(args?: SelectSubset<T, IngredientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingredient.
     * @param {IngredientCreateArgs} args - Arguments to create a Ingredient.
     * @example
     * // Create one Ingredient
     * const Ingredient = await prisma.ingredient.create({
     *   data: {
     *     // ... data to create a Ingredient
     *   }
     * })
     * 
     */
    create<T extends IngredientCreateArgs>(args: SelectSubset<T, IngredientCreateArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingredients.
     * @param {IngredientCreateManyArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredient = await prisma.ingredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngredientCreateManyArgs>(args?: SelectSubset<T, IngredientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingredients and returns the data saved in the database.
     * @param {IngredientCreateManyAndReturnArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredient = await prisma.ingredient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingredients and only return the `ingredientId`
     * const ingredientWithIngredientIdOnly = await prisma.ingredient.createManyAndReturn({
     *   select: { ingredientId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngredientCreateManyAndReturnArgs>(args?: SelectSubset<T, IngredientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ingredient.
     * @param {IngredientDeleteArgs} args - Arguments to delete one Ingredient.
     * @example
     * // Delete one Ingredient
     * const Ingredient = await prisma.ingredient.delete({
     *   where: {
     *     // ... filter to delete one Ingredient
     *   }
     * })
     * 
     */
    delete<T extends IngredientDeleteArgs>(args: SelectSubset<T, IngredientDeleteArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingredient.
     * @param {IngredientUpdateArgs} args - Arguments to update one Ingredient.
     * @example
     * // Update one Ingredient
     * const ingredient = await prisma.ingredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngredientUpdateArgs>(args: SelectSubset<T, IngredientUpdateArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingredients.
     * @param {IngredientDeleteManyArgs} args - Arguments to filter Ingredients to delete.
     * @example
     * // Delete a few Ingredients
     * const { count } = await prisma.ingredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngredientDeleteManyArgs>(args?: SelectSubset<T, IngredientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngredientUpdateManyArgs>(args: SelectSubset<T, IngredientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients and returns the data updated in the database.
     * @param {IngredientUpdateManyAndReturnArgs} args - Arguments to update many Ingredients.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ingredients and only return the `ingredientId`
     * const ingredientWithIngredientIdOnly = await prisma.ingredient.updateManyAndReturn({
     *   select: { ingredientId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IngredientUpdateManyAndReturnArgs>(args: SelectSubset<T, IngredientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ingredient.
     * @param {IngredientUpsertArgs} args - Arguments to update or create a Ingredient.
     * @example
     * // Update or create a Ingredient
     * const ingredient = await prisma.ingredient.upsert({
     *   create: {
     *     // ... data to create a Ingredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingredient we want to update
     *   }
     * })
     */
    upsert<T extends IngredientUpsertArgs>(args: SelectSubset<T, IngredientUpsertArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientCountArgs} args - Arguments to filter Ingredients to count.
     * @example
     * // Count the number of Ingredients
     * const count = await prisma.ingredient.count({
     *   where: {
     *     // ... the filter for the Ingredients we want to count
     *   }
     * })
    **/
    count<T extends IngredientCountArgs>(
      args?: Subset<T, IngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IngredientAggregateArgs>(args: Subset<T, IngredientAggregateArgs>): Prisma.PrismaPromise<GetIngredientAggregateType<T>>

    /**
     * Group by Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngredientGroupByArgs['orderBy'] }
        : { orderBy?: IngredientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ingredient model
   */
  readonly fields: IngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ingredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productor<T extends PersonnelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonnelDefaultArgs<ExtArgs>>): Prisma__PersonnelClient<$Result.GetResult<Prisma.$PersonnelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ingredient model
   */
  interface IngredientFieldRefs {
    readonly ingredientId: FieldRef<"Ingredient", 'Int'>
    readonly productorId: FieldRef<"Ingredient", 'String'>
    readonly label: FieldRef<"Ingredient", 'String'>
    readonly quantity: FieldRef<"Ingredient", 'Decimal'>
    readonly threshold: FieldRef<"Ingredient", 'Decimal'>
    readonly provider: FieldRef<"Ingredient", 'String'>
    readonly createdAt: FieldRef<"Ingredient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ingredient findUnique
   */
  export type IngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient findUniqueOrThrow
   */
  export type IngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient findFirst
   */
  export type IngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient findFirstOrThrow
   */
  export type IngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient findMany
   */
  export type IngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient create
   */
  export type IngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The data needed to create a Ingredient.
     */
    data: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
  }

  /**
   * Ingredient createMany
   */
  export type IngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientCreateManyInput | IngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingredient createManyAndReturn
   */
  export type IngredientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientCreateManyInput | IngredientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ingredient update
   */
  export type IngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The data needed to update a Ingredient.
     */
    data: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
    /**
     * Choose, which Ingredient to update.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient updateMany
   */
  export type IngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to update.
     */
    limit?: number
  }

  /**
   * Ingredient updateManyAndReturn
   */
  export type IngredientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ingredient upsert
   */
  export type IngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The filter to search for the Ingredient to update in case it exists.
     */
    where: IngredientWhereUniqueInput
    /**
     * In case the Ingredient found by the `where` argument doesn't exist, create a new Ingredient with this data.
     */
    create: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
    /**
     * In case the Ingredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
  }

  /**
   * Ingredient delete
   */
  export type IngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter which Ingredient to delete.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient deleteMany
   */
  export type IngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredients to delete
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to delete.
     */
    limit?: number
  }

  /**
   * Ingredient without action
   */
  export type IngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
  }


  /**
   * Model Step
   */

  export type AggregateStep = {
    _count: StepCountAggregateOutputType | null
    _avg: StepAvgAggregateOutputType | null
    _sum: StepSumAggregateOutputType | null
    _min: StepMinAggregateOutputType | null
    _max: StepMaxAggregateOutputType | null
  }

  export type StepAvgAggregateOutputType = {
    stepId: number | null
    duration: number | null
  }

  export type StepSumAggregateOutputType = {
    stepId: number | null
    duration: number | null
  }

  export type StepMinAggregateOutputType = {
    stepId: number | null
    productorId: string | null
    label: string | null
    duration: number | null
    unit: $Enums.DurationUnit | null
    description: string | null
    createdAt: Date | null
  }

  export type StepMaxAggregateOutputType = {
    stepId: number | null
    productorId: string | null
    label: string | null
    duration: number | null
    unit: $Enums.DurationUnit | null
    description: string | null
    createdAt: Date | null
  }

  export type StepCountAggregateOutputType = {
    stepId: number
    productorId: number
    label: number
    duration: number
    unit: number
    description: number
    createdAt: number
    _all: number
  }


  export type StepAvgAggregateInputType = {
    stepId?: true
    duration?: true
  }

  export type StepSumAggregateInputType = {
    stepId?: true
    duration?: true
  }

  export type StepMinAggregateInputType = {
    stepId?: true
    productorId?: true
    label?: true
    duration?: true
    unit?: true
    description?: true
    createdAt?: true
  }

  export type StepMaxAggregateInputType = {
    stepId?: true
    productorId?: true
    label?: true
    duration?: true
    unit?: true
    description?: true
    createdAt?: true
  }

  export type StepCountAggregateInputType = {
    stepId?: true
    productorId?: true
    label?: true
    duration?: true
    unit?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type StepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Step to aggregate.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Steps
    **/
    _count?: true | StepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StepAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StepSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StepMaxAggregateInputType
  }

  export type GetStepAggregateType<T extends StepAggregateArgs> = {
        [P in keyof T & keyof AggregateStep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStep[P]>
      : GetScalarType<T[P], AggregateStep[P]>
  }




  export type StepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepWhereInput
    orderBy?: StepOrderByWithAggregationInput | StepOrderByWithAggregationInput[]
    by: StepScalarFieldEnum[] | StepScalarFieldEnum
    having?: StepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StepCountAggregateInputType | true
    _avg?: StepAvgAggregateInputType
    _sum?: StepSumAggregateInputType
    _min?: StepMinAggregateInputType
    _max?: StepMaxAggregateInputType
  }

  export type StepGroupByOutputType = {
    stepId: number
    productorId: string
    label: string
    duration: number
    unit: $Enums.DurationUnit
    description: string
    createdAt: Date
    _count: StepCountAggregateOutputType | null
    _avg: StepAvgAggregateOutputType | null
    _sum: StepSumAggregateOutputType | null
    _min: StepMinAggregateOutputType | null
    _max: StepMaxAggregateOutputType | null
  }

  type GetStepGroupByPayload<T extends StepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StepGroupByOutputType[P]>
            : GetScalarType<T[P], StepGroupByOutputType[P]>
        }
      >
    >


  export type StepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    stepId?: boolean
    productorId?: boolean
    label?: boolean
    duration?: boolean
    unit?: boolean
    description?: boolean
    createdAt?: boolean
    productor?: boolean | PersonnelDefaultArgs<ExtArgs>
    vintages?: boolean | Step$vintagesArgs<ExtArgs>
    _count?: boolean | StepCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["step"]>

  export type StepSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    stepId?: boolean
    productorId?: boolean
    label?: boolean
    duration?: boolean
    unit?: boolean
    description?: boolean
    createdAt?: boolean
    productor?: boolean | PersonnelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["step"]>

  export type StepSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    stepId?: boolean
    productorId?: boolean
    label?: boolean
    duration?: boolean
    unit?: boolean
    description?: boolean
    createdAt?: boolean
    productor?: boolean | PersonnelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["step"]>

  export type StepSelectScalar = {
    stepId?: boolean
    productorId?: boolean
    label?: boolean
    duration?: boolean
    unit?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type StepOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"stepId" | "productorId" | "label" | "duration" | "unit" | "description" | "createdAt", ExtArgs["result"]["step"]>
  export type StepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productor?: boolean | PersonnelDefaultArgs<ExtArgs>
    vintages?: boolean | Step$vintagesArgs<ExtArgs>
    _count?: boolean | StepCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StepIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productor?: boolean | PersonnelDefaultArgs<ExtArgs>
  }
  export type StepIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productor?: boolean | PersonnelDefaultArgs<ExtArgs>
  }

  export type $StepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Step"
    objects: {
      productor: Prisma.$PersonnelPayload<ExtArgs>
      vintages: Prisma.$VintageStepPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      stepId: number
      productorId: string
      label: string
      duration: number
      unit: $Enums.DurationUnit
      description: string
      createdAt: Date
    }, ExtArgs["result"]["step"]>
    composites: {}
  }

  type StepGetPayload<S extends boolean | null | undefined | StepDefaultArgs> = $Result.GetResult<Prisma.$StepPayload, S>

  type StepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StepCountAggregateInputType | true
    }

  export interface StepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Step'], meta: { name: 'Step' } }
    /**
     * Find zero or one Step that matches the filter.
     * @param {StepFindUniqueArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StepFindUniqueArgs>(args: SelectSubset<T, StepFindUniqueArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Step that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StepFindUniqueOrThrowArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StepFindUniqueOrThrowArgs>(args: SelectSubset<T, StepFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Step that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepFindFirstArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StepFindFirstArgs>(args?: SelectSubset<T, StepFindFirstArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Step that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepFindFirstOrThrowArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StepFindFirstOrThrowArgs>(args?: SelectSubset<T, StepFindFirstOrThrowArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Steps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Steps
     * const steps = await prisma.step.findMany()
     * 
     * // Get first 10 Steps
     * const steps = await prisma.step.findMany({ take: 10 })
     * 
     * // Only select the `stepId`
     * const stepWithStepIdOnly = await prisma.step.findMany({ select: { stepId: true } })
     * 
     */
    findMany<T extends StepFindManyArgs>(args?: SelectSubset<T, StepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Step.
     * @param {StepCreateArgs} args - Arguments to create a Step.
     * @example
     * // Create one Step
     * const Step = await prisma.step.create({
     *   data: {
     *     // ... data to create a Step
     *   }
     * })
     * 
     */
    create<T extends StepCreateArgs>(args: SelectSubset<T, StepCreateArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Steps.
     * @param {StepCreateManyArgs} args - Arguments to create many Steps.
     * @example
     * // Create many Steps
     * const step = await prisma.step.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StepCreateManyArgs>(args?: SelectSubset<T, StepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Steps and returns the data saved in the database.
     * @param {StepCreateManyAndReturnArgs} args - Arguments to create many Steps.
     * @example
     * // Create many Steps
     * const step = await prisma.step.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Steps and only return the `stepId`
     * const stepWithStepIdOnly = await prisma.step.createManyAndReturn({
     *   select: { stepId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StepCreateManyAndReturnArgs>(args?: SelectSubset<T, StepCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Step.
     * @param {StepDeleteArgs} args - Arguments to delete one Step.
     * @example
     * // Delete one Step
     * const Step = await prisma.step.delete({
     *   where: {
     *     // ... filter to delete one Step
     *   }
     * })
     * 
     */
    delete<T extends StepDeleteArgs>(args: SelectSubset<T, StepDeleteArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Step.
     * @param {StepUpdateArgs} args - Arguments to update one Step.
     * @example
     * // Update one Step
     * const step = await prisma.step.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StepUpdateArgs>(args: SelectSubset<T, StepUpdateArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Steps.
     * @param {StepDeleteManyArgs} args - Arguments to filter Steps to delete.
     * @example
     * // Delete a few Steps
     * const { count } = await prisma.step.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StepDeleteManyArgs>(args?: SelectSubset<T, StepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Steps
     * const step = await prisma.step.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StepUpdateManyArgs>(args: SelectSubset<T, StepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Steps and returns the data updated in the database.
     * @param {StepUpdateManyAndReturnArgs} args - Arguments to update many Steps.
     * @example
     * // Update many Steps
     * const step = await prisma.step.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Steps and only return the `stepId`
     * const stepWithStepIdOnly = await prisma.step.updateManyAndReturn({
     *   select: { stepId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StepUpdateManyAndReturnArgs>(args: SelectSubset<T, StepUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Step.
     * @param {StepUpsertArgs} args - Arguments to update or create a Step.
     * @example
     * // Update or create a Step
     * const step = await prisma.step.upsert({
     *   create: {
     *     // ... data to create a Step
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Step we want to update
     *   }
     * })
     */
    upsert<T extends StepUpsertArgs>(args: SelectSubset<T, StepUpsertArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepCountArgs} args - Arguments to filter Steps to count.
     * @example
     * // Count the number of Steps
     * const count = await prisma.step.count({
     *   where: {
     *     // ... the filter for the Steps we want to count
     *   }
     * })
    **/
    count<T extends StepCountArgs>(
      args?: Subset<T, StepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Step.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StepAggregateArgs>(args: Subset<T, StepAggregateArgs>): Prisma.PrismaPromise<GetStepAggregateType<T>>

    /**
     * Group by Step.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StepGroupByArgs['orderBy'] }
        : { orderBy?: StepGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Step model
   */
  readonly fields: StepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Step.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productor<T extends PersonnelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonnelDefaultArgs<ExtArgs>>): Prisma__PersonnelClient<$Result.GetResult<Prisma.$PersonnelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vintages<T extends Step$vintagesArgs<ExtArgs> = {}>(args?: Subset<T, Step$vintagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VintageStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Step model
   */
  interface StepFieldRefs {
    readonly stepId: FieldRef<"Step", 'Int'>
    readonly productorId: FieldRef<"Step", 'String'>
    readonly label: FieldRef<"Step", 'String'>
    readonly duration: FieldRef<"Step", 'Int'>
    readonly unit: FieldRef<"Step", 'DurationUnit'>
    readonly description: FieldRef<"Step", 'String'>
    readonly createdAt: FieldRef<"Step", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Step findUnique
   */
  export type StepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where: StepWhereUniqueInput
  }

  /**
   * Step findUniqueOrThrow
   */
  export type StepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where: StepWhereUniqueInput
  }

  /**
   * Step findFirst
   */
  export type StepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Steps.
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Steps.
     */
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Step findFirstOrThrow
   */
  export type StepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Steps.
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Steps.
     */
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Step findMany
   */
  export type StepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Steps to fetch.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Steps.
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Step create
   */
  export type StepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * The data needed to create a Step.
     */
    data: XOR<StepCreateInput, StepUncheckedCreateInput>
  }

  /**
   * Step createMany
   */
  export type StepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Steps.
     */
    data: StepCreateManyInput | StepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Step createManyAndReturn
   */
  export type StepCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * The data used to create many Steps.
     */
    data: StepCreateManyInput | StepCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Step update
   */
  export type StepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * The data needed to update a Step.
     */
    data: XOR<StepUpdateInput, StepUncheckedUpdateInput>
    /**
     * Choose, which Step to update.
     */
    where: StepWhereUniqueInput
  }

  /**
   * Step updateMany
   */
  export type StepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Steps.
     */
    data: XOR<StepUpdateManyMutationInput, StepUncheckedUpdateManyInput>
    /**
     * Filter which Steps to update
     */
    where?: StepWhereInput
    /**
     * Limit how many Steps to update.
     */
    limit?: number
  }

  /**
   * Step updateManyAndReturn
   */
  export type StepUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * The data used to update Steps.
     */
    data: XOR<StepUpdateManyMutationInput, StepUncheckedUpdateManyInput>
    /**
     * Filter which Steps to update
     */
    where?: StepWhereInput
    /**
     * Limit how many Steps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Step upsert
   */
  export type StepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * The filter to search for the Step to update in case it exists.
     */
    where: StepWhereUniqueInput
    /**
     * In case the Step found by the `where` argument doesn't exist, create a new Step with this data.
     */
    create: XOR<StepCreateInput, StepUncheckedCreateInput>
    /**
     * In case the Step was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StepUpdateInput, StepUncheckedUpdateInput>
  }

  /**
   * Step delete
   */
  export type StepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter which Step to delete.
     */
    where: StepWhereUniqueInput
  }

  /**
   * Step deleteMany
   */
  export type StepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Steps to delete
     */
    where?: StepWhereInput
    /**
     * Limit how many Steps to delete.
     */
    limit?: number
  }

  /**
   * Step.vintages
   */
  export type Step$vintagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VintageStep
     */
    select?: VintageStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VintageStep
     */
    omit?: VintageStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VintageStepInclude<ExtArgs> | null
    where?: VintageStepWhereInput
    orderBy?: VintageStepOrderByWithRelationInput | VintageStepOrderByWithRelationInput[]
    cursor?: VintageStepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VintageStepScalarFieldEnum | VintageStepScalarFieldEnum[]
  }

  /**
   * Step without action
   */
  export type StepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
  }


  /**
   * Model Vintage
   */

  export type AggregateVintage = {
    _count: VintageCountAggregateOutputType | null
    _avg: VintageAvgAggregateOutputType | null
    _sum: VintageSumAggregateOutputType | null
    _min: VintageMinAggregateOutputType | null
    _max: VintageMaxAggregateOutputType | null
  }

  export type VintageAvgAggregateOutputType = {
    vintageId: number | null
  }

  export type VintageSumAggregateOutputType = {
    vintageId: number | null
  }

  export type VintageMinAggregateOutputType = {
    vintageId: number | null
    productorId: string | null
    label: string | null
    quality: string | null
    createdAt: Date | null
  }

  export type VintageMaxAggregateOutputType = {
    vintageId: number | null
    productorId: string | null
    label: string | null
    quality: string | null
    createdAt: Date | null
  }

  export type VintageCountAggregateOutputType = {
    vintageId: number
    productorId: number
    label: number
    quality: number
    createdAt: number
    _all: number
  }


  export type VintageAvgAggregateInputType = {
    vintageId?: true
  }

  export type VintageSumAggregateInputType = {
    vintageId?: true
  }

  export type VintageMinAggregateInputType = {
    vintageId?: true
    productorId?: true
    label?: true
    quality?: true
    createdAt?: true
  }

  export type VintageMaxAggregateInputType = {
    vintageId?: true
    productorId?: true
    label?: true
    quality?: true
    createdAt?: true
  }

  export type VintageCountAggregateInputType = {
    vintageId?: true
    productorId?: true
    label?: true
    quality?: true
    createdAt?: true
    _all?: true
  }

  export type VintageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vintage to aggregate.
     */
    where?: VintageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vintages to fetch.
     */
    orderBy?: VintageOrderByWithRelationInput | VintageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VintageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vintages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vintages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vintages
    **/
    _count?: true | VintageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VintageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VintageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VintageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VintageMaxAggregateInputType
  }

  export type GetVintageAggregateType<T extends VintageAggregateArgs> = {
        [P in keyof T & keyof AggregateVintage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVintage[P]>
      : GetScalarType<T[P], AggregateVintage[P]>
  }




  export type VintageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VintageWhereInput
    orderBy?: VintageOrderByWithAggregationInput | VintageOrderByWithAggregationInput[]
    by: VintageScalarFieldEnum[] | VintageScalarFieldEnum
    having?: VintageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VintageCountAggregateInputType | true
    _avg?: VintageAvgAggregateInputType
    _sum?: VintageSumAggregateInputType
    _min?: VintageMinAggregateInputType
    _max?: VintageMaxAggregateInputType
  }

  export type VintageGroupByOutputType = {
    vintageId: number
    productorId: string
    label: string
    quality: string
    createdAt: Date
    _count: VintageCountAggregateOutputType | null
    _avg: VintageAvgAggregateOutputType | null
    _sum: VintageSumAggregateOutputType | null
    _min: VintageMinAggregateOutputType | null
    _max: VintageMaxAggregateOutputType | null
  }

  type GetVintageGroupByPayload<T extends VintageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VintageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VintageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VintageGroupByOutputType[P]>
            : GetScalarType<T[P], VintageGroupByOutputType[P]>
        }
      >
    >


  export type VintageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vintageId?: boolean
    productorId?: boolean
    label?: boolean
    quality?: boolean
    createdAt?: boolean
    steps?: boolean | Vintage$stepsArgs<ExtArgs>
    products?: boolean | Vintage$productsArgs<ExtArgs>
    _count?: boolean | VintageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vintage"]>

  export type VintageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vintageId?: boolean
    productorId?: boolean
    label?: boolean
    quality?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["vintage"]>

  export type VintageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vintageId?: boolean
    productorId?: boolean
    label?: boolean
    quality?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["vintage"]>

  export type VintageSelectScalar = {
    vintageId?: boolean
    productorId?: boolean
    label?: boolean
    quality?: boolean
    createdAt?: boolean
  }

  export type VintageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"vintageId" | "productorId" | "label" | "quality" | "createdAt", ExtArgs["result"]["vintage"]>
  export type VintageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    steps?: boolean | Vintage$stepsArgs<ExtArgs>
    products?: boolean | Vintage$productsArgs<ExtArgs>
    _count?: boolean | VintageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VintageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VintageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VintagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vintage"
    objects: {
      steps: Prisma.$VintageStepPayload<ExtArgs>[]
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      vintageId: number
      productorId: string
      label: string
      quality: string
      createdAt: Date
    }, ExtArgs["result"]["vintage"]>
    composites: {}
  }

  type VintageGetPayload<S extends boolean | null | undefined | VintageDefaultArgs> = $Result.GetResult<Prisma.$VintagePayload, S>

  type VintageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VintageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VintageCountAggregateInputType | true
    }

  export interface VintageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vintage'], meta: { name: 'Vintage' } }
    /**
     * Find zero or one Vintage that matches the filter.
     * @param {VintageFindUniqueArgs} args - Arguments to find a Vintage
     * @example
     * // Get one Vintage
     * const vintage = await prisma.vintage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VintageFindUniqueArgs>(args: SelectSubset<T, VintageFindUniqueArgs<ExtArgs>>): Prisma__VintageClient<$Result.GetResult<Prisma.$VintagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vintage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VintageFindUniqueOrThrowArgs} args - Arguments to find a Vintage
     * @example
     * // Get one Vintage
     * const vintage = await prisma.vintage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VintageFindUniqueOrThrowArgs>(args: SelectSubset<T, VintageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VintageClient<$Result.GetResult<Prisma.$VintagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vintage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VintageFindFirstArgs} args - Arguments to find a Vintage
     * @example
     * // Get one Vintage
     * const vintage = await prisma.vintage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VintageFindFirstArgs>(args?: SelectSubset<T, VintageFindFirstArgs<ExtArgs>>): Prisma__VintageClient<$Result.GetResult<Prisma.$VintagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vintage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VintageFindFirstOrThrowArgs} args - Arguments to find a Vintage
     * @example
     * // Get one Vintage
     * const vintage = await prisma.vintage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VintageFindFirstOrThrowArgs>(args?: SelectSubset<T, VintageFindFirstOrThrowArgs<ExtArgs>>): Prisma__VintageClient<$Result.GetResult<Prisma.$VintagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vintages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VintageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vintages
     * const vintages = await prisma.vintage.findMany()
     * 
     * // Get first 10 Vintages
     * const vintages = await prisma.vintage.findMany({ take: 10 })
     * 
     * // Only select the `vintageId`
     * const vintageWithVintageIdOnly = await prisma.vintage.findMany({ select: { vintageId: true } })
     * 
     */
    findMany<T extends VintageFindManyArgs>(args?: SelectSubset<T, VintageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VintagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vintage.
     * @param {VintageCreateArgs} args - Arguments to create a Vintage.
     * @example
     * // Create one Vintage
     * const Vintage = await prisma.vintage.create({
     *   data: {
     *     // ... data to create a Vintage
     *   }
     * })
     * 
     */
    create<T extends VintageCreateArgs>(args: SelectSubset<T, VintageCreateArgs<ExtArgs>>): Prisma__VintageClient<$Result.GetResult<Prisma.$VintagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vintages.
     * @param {VintageCreateManyArgs} args - Arguments to create many Vintages.
     * @example
     * // Create many Vintages
     * const vintage = await prisma.vintage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VintageCreateManyArgs>(args?: SelectSubset<T, VintageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vintages and returns the data saved in the database.
     * @param {VintageCreateManyAndReturnArgs} args - Arguments to create many Vintages.
     * @example
     * // Create many Vintages
     * const vintage = await prisma.vintage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vintages and only return the `vintageId`
     * const vintageWithVintageIdOnly = await prisma.vintage.createManyAndReturn({
     *   select: { vintageId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VintageCreateManyAndReturnArgs>(args?: SelectSubset<T, VintageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VintagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vintage.
     * @param {VintageDeleteArgs} args - Arguments to delete one Vintage.
     * @example
     * // Delete one Vintage
     * const Vintage = await prisma.vintage.delete({
     *   where: {
     *     // ... filter to delete one Vintage
     *   }
     * })
     * 
     */
    delete<T extends VintageDeleteArgs>(args: SelectSubset<T, VintageDeleteArgs<ExtArgs>>): Prisma__VintageClient<$Result.GetResult<Prisma.$VintagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vintage.
     * @param {VintageUpdateArgs} args - Arguments to update one Vintage.
     * @example
     * // Update one Vintage
     * const vintage = await prisma.vintage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VintageUpdateArgs>(args: SelectSubset<T, VintageUpdateArgs<ExtArgs>>): Prisma__VintageClient<$Result.GetResult<Prisma.$VintagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vintages.
     * @param {VintageDeleteManyArgs} args - Arguments to filter Vintages to delete.
     * @example
     * // Delete a few Vintages
     * const { count } = await prisma.vintage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VintageDeleteManyArgs>(args?: SelectSubset<T, VintageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vintages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VintageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vintages
     * const vintage = await prisma.vintage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VintageUpdateManyArgs>(args: SelectSubset<T, VintageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vintages and returns the data updated in the database.
     * @param {VintageUpdateManyAndReturnArgs} args - Arguments to update many Vintages.
     * @example
     * // Update many Vintages
     * const vintage = await prisma.vintage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vintages and only return the `vintageId`
     * const vintageWithVintageIdOnly = await prisma.vintage.updateManyAndReturn({
     *   select: { vintageId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VintageUpdateManyAndReturnArgs>(args: SelectSubset<T, VintageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VintagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vintage.
     * @param {VintageUpsertArgs} args - Arguments to update or create a Vintage.
     * @example
     * // Update or create a Vintage
     * const vintage = await prisma.vintage.upsert({
     *   create: {
     *     // ... data to create a Vintage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vintage we want to update
     *   }
     * })
     */
    upsert<T extends VintageUpsertArgs>(args: SelectSubset<T, VintageUpsertArgs<ExtArgs>>): Prisma__VintageClient<$Result.GetResult<Prisma.$VintagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vintages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VintageCountArgs} args - Arguments to filter Vintages to count.
     * @example
     * // Count the number of Vintages
     * const count = await prisma.vintage.count({
     *   where: {
     *     // ... the filter for the Vintages we want to count
     *   }
     * })
    **/
    count<T extends VintageCountArgs>(
      args?: Subset<T, VintageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VintageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vintage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VintageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VintageAggregateArgs>(args: Subset<T, VintageAggregateArgs>): Prisma.PrismaPromise<GetVintageAggregateType<T>>

    /**
     * Group by Vintage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VintageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VintageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VintageGroupByArgs['orderBy'] }
        : { orderBy?: VintageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VintageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVintageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vintage model
   */
  readonly fields: VintageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vintage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VintageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    steps<T extends Vintage$stepsArgs<ExtArgs> = {}>(args?: Subset<T, Vintage$stepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VintageStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends Vintage$productsArgs<ExtArgs> = {}>(args?: Subset<T, Vintage$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vintage model
   */
  interface VintageFieldRefs {
    readonly vintageId: FieldRef<"Vintage", 'Int'>
    readonly productorId: FieldRef<"Vintage", 'String'>
    readonly label: FieldRef<"Vintage", 'String'>
    readonly quality: FieldRef<"Vintage", 'String'>
    readonly createdAt: FieldRef<"Vintage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vintage findUnique
   */
  export type VintageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vintage
     */
    select?: VintageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vintage
     */
    omit?: VintageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VintageInclude<ExtArgs> | null
    /**
     * Filter, which Vintage to fetch.
     */
    where: VintageWhereUniqueInput
  }

  /**
   * Vintage findUniqueOrThrow
   */
  export type VintageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vintage
     */
    select?: VintageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vintage
     */
    omit?: VintageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VintageInclude<ExtArgs> | null
    /**
     * Filter, which Vintage to fetch.
     */
    where: VintageWhereUniqueInput
  }

  /**
   * Vintage findFirst
   */
  export type VintageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vintage
     */
    select?: VintageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vintage
     */
    omit?: VintageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VintageInclude<ExtArgs> | null
    /**
     * Filter, which Vintage to fetch.
     */
    where?: VintageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vintages to fetch.
     */
    orderBy?: VintageOrderByWithRelationInput | VintageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vintages.
     */
    cursor?: VintageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vintages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vintages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vintages.
     */
    distinct?: VintageScalarFieldEnum | VintageScalarFieldEnum[]
  }

  /**
   * Vintage findFirstOrThrow
   */
  export type VintageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vintage
     */
    select?: VintageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vintage
     */
    omit?: VintageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VintageInclude<ExtArgs> | null
    /**
     * Filter, which Vintage to fetch.
     */
    where?: VintageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vintages to fetch.
     */
    orderBy?: VintageOrderByWithRelationInput | VintageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vintages.
     */
    cursor?: VintageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vintages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vintages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vintages.
     */
    distinct?: VintageScalarFieldEnum | VintageScalarFieldEnum[]
  }

  /**
   * Vintage findMany
   */
  export type VintageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vintage
     */
    select?: VintageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vintage
     */
    omit?: VintageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VintageInclude<ExtArgs> | null
    /**
     * Filter, which Vintages to fetch.
     */
    where?: VintageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vintages to fetch.
     */
    orderBy?: VintageOrderByWithRelationInput | VintageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vintages.
     */
    cursor?: VintageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vintages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vintages.
     */
    skip?: number
    distinct?: VintageScalarFieldEnum | VintageScalarFieldEnum[]
  }

  /**
   * Vintage create
   */
  export type VintageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vintage
     */
    select?: VintageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vintage
     */
    omit?: VintageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VintageInclude<ExtArgs> | null
    /**
     * The data needed to create a Vintage.
     */
    data: XOR<VintageCreateInput, VintageUncheckedCreateInput>
  }

  /**
   * Vintage createMany
   */
  export type VintageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vintages.
     */
    data: VintageCreateManyInput | VintageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vintage createManyAndReturn
   */
  export type VintageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vintage
     */
    select?: VintageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vintage
     */
    omit?: VintageOmit<ExtArgs> | null
    /**
     * The data used to create many Vintages.
     */
    data: VintageCreateManyInput | VintageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vintage update
   */
  export type VintageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vintage
     */
    select?: VintageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vintage
     */
    omit?: VintageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VintageInclude<ExtArgs> | null
    /**
     * The data needed to update a Vintage.
     */
    data: XOR<VintageUpdateInput, VintageUncheckedUpdateInput>
    /**
     * Choose, which Vintage to update.
     */
    where: VintageWhereUniqueInput
  }

  /**
   * Vintage updateMany
   */
  export type VintageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vintages.
     */
    data: XOR<VintageUpdateManyMutationInput, VintageUncheckedUpdateManyInput>
    /**
     * Filter which Vintages to update
     */
    where?: VintageWhereInput
    /**
     * Limit how many Vintages to update.
     */
    limit?: number
  }

  /**
   * Vintage updateManyAndReturn
   */
  export type VintageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vintage
     */
    select?: VintageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vintage
     */
    omit?: VintageOmit<ExtArgs> | null
    /**
     * The data used to update Vintages.
     */
    data: XOR<VintageUpdateManyMutationInput, VintageUncheckedUpdateManyInput>
    /**
     * Filter which Vintages to update
     */
    where?: VintageWhereInput
    /**
     * Limit how many Vintages to update.
     */
    limit?: number
  }

  /**
   * Vintage upsert
   */
  export type VintageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vintage
     */
    select?: VintageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vintage
     */
    omit?: VintageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VintageInclude<ExtArgs> | null
    /**
     * The filter to search for the Vintage to update in case it exists.
     */
    where: VintageWhereUniqueInput
    /**
     * In case the Vintage found by the `where` argument doesn't exist, create a new Vintage with this data.
     */
    create: XOR<VintageCreateInput, VintageUncheckedCreateInput>
    /**
     * In case the Vintage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VintageUpdateInput, VintageUncheckedUpdateInput>
  }

  /**
   * Vintage delete
   */
  export type VintageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vintage
     */
    select?: VintageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vintage
     */
    omit?: VintageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VintageInclude<ExtArgs> | null
    /**
     * Filter which Vintage to delete.
     */
    where: VintageWhereUniqueInput
  }

  /**
   * Vintage deleteMany
   */
  export type VintageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vintages to delete
     */
    where?: VintageWhereInput
    /**
     * Limit how many Vintages to delete.
     */
    limit?: number
  }

  /**
   * Vintage.steps
   */
  export type Vintage$stepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VintageStep
     */
    select?: VintageStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VintageStep
     */
    omit?: VintageStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VintageStepInclude<ExtArgs> | null
    where?: VintageStepWhereInput
    orderBy?: VintageStepOrderByWithRelationInput | VintageStepOrderByWithRelationInput[]
    cursor?: VintageStepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VintageStepScalarFieldEnum | VintageStepScalarFieldEnum[]
  }

  /**
   * Vintage.products
   */
  export type Vintage$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Vintage without action
   */
  export type VintageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vintage
     */
    select?: VintageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vintage
     */
    omit?: VintageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VintageInclude<ExtArgs> | null
  }


  /**
   * Model VintageStep
   */

  export type AggregateVintageStep = {
    _count: VintageStepCountAggregateOutputType | null
    _avg: VintageStepAvgAggregateOutputType | null
    _sum: VintageStepSumAggregateOutputType | null
    _min: VintageStepMinAggregateOutputType | null
    _max: VintageStepMaxAggregateOutputType | null
  }

  export type VintageStepAvgAggregateOutputType = {
    vintageStepId: number | null
    stepId: number | null
    vintageId: number | null
  }

  export type VintageStepSumAggregateOutputType = {
    vintageStepId: number | null
    stepId: number | null
    vintageId: number | null
  }

  export type VintageStepMinAggregateOutputType = {
    vintageStepId: number | null
    stepId: number | null
    vintageId: number | null
    createdAt: Date | null
  }

  export type VintageStepMaxAggregateOutputType = {
    vintageStepId: number | null
    stepId: number | null
    vintageId: number | null
    createdAt: Date | null
  }

  export type VintageStepCountAggregateOutputType = {
    vintageStepId: number
    stepId: number
    vintageId: number
    createdAt: number
    _all: number
  }


  export type VintageStepAvgAggregateInputType = {
    vintageStepId?: true
    stepId?: true
    vintageId?: true
  }

  export type VintageStepSumAggregateInputType = {
    vintageStepId?: true
    stepId?: true
    vintageId?: true
  }

  export type VintageStepMinAggregateInputType = {
    vintageStepId?: true
    stepId?: true
    vintageId?: true
    createdAt?: true
  }

  export type VintageStepMaxAggregateInputType = {
    vintageStepId?: true
    stepId?: true
    vintageId?: true
    createdAt?: true
  }

  export type VintageStepCountAggregateInputType = {
    vintageStepId?: true
    stepId?: true
    vintageId?: true
    createdAt?: true
    _all?: true
  }

  export type VintageStepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VintageStep to aggregate.
     */
    where?: VintageStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VintageSteps to fetch.
     */
    orderBy?: VintageStepOrderByWithRelationInput | VintageStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VintageStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VintageSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VintageSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VintageSteps
    **/
    _count?: true | VintageStepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VintageStepAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VintageStepSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VintageStepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VintageStepMaxAggregateInputType
  }

  export type GetVintageStepAggregateType<T extends VintageStepAggregateArgs> = {
        [P in keyof T & keyof AggregateVintageStep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVintageStep[P]>
      : GetScalarType<T[P], AggregateVintageStep[P]>
  }




  export type VintageStepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VintageStepWhereInput
    orderBy?: VintageStepOrderByWithAggregationInput | VintageStepOrderByWithAggregationInput[]
    by: VintageStepScalarFieldEnum[] | VintageStepScalarFieldEnum
    having?: VintageStepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VintageStepCountAggregateInputType | true
    _avg?: VintageStepAvgAggregateInputType
    _sum?: VintageStepSumAggregateInputType
    _min?: VintageStepMinAggregateInputType
    _max?: VintageStepMaxAggregateInputType
  }

  export type VintageStepGroupByOutputType = {
    vintageStepId: number
    stepId: number
    vintageId: number
    createdAt: Date
    _count: VintageStepCountAggregateOutputType | null
    _avg: VintageStepAvgAggregateOutputType | null
    _sum: VintageStepSumAggregateOutputType | null
    _min: VintageStepMinAggregateOutputType | null
    _max: VintageStepMaxAggregateOutputType | null
  }

  type GetVintageStepGroupByPayload<T extends VintageStepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VintageStepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VintageStepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VintageStepGroupByOutputType[P]>
            : GetScalarType<T[P], VintageStepGroupByOutputType[P]>
        }
      >
    >


  export type VintageStepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vintageStepId?: boolean
    stepId?: boolean
    vintageId?: boolean
    createdAt?: boolean
    step?: boolean | StepDefaultArgs<ExtArgs>
    vintage?: boolean | VintageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vintageStep"]>

  export type VintageStepSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vintageStepId?: boolean
    stepId?: boolean
    vintageId?: boolean
    createdAt?: boolean
    step?: boolean | StepDefaultArgs<ExtArgs>
    vintage?: boolean | VintageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vintageStep"]>

  export type VintageStepSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vintageStepId?: boolean
    stepId?: boolean
    vintageId?: boolean
    createdAt?: boolean
    step?: boolean | StepDefaultArgs<ExtArgs>
    vintage?: boolean | VintageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vintageStep"]>

  export type VintageStepSelectScalar = {
    vintageStepId?: boolean
    stepId?: boolean
    vintageId?: boolean
    createdAt?: boolean
  }

  export type VintageStepOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"vintageStepId" | "stepId" | "vintageId" | "createdAt", ExtArgs["result"]["vintageStep"]>
  export type VintageStepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    step?: boolean | StepDefaultArgs<ExtArgs>
    vintage?: boolean | VintageDefaultArgs<ExtArgs>
  }
  export type VintageStepIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    step?: boolean | StepDefaultArgs<ExtArgs>
    vintage?: boolean | VintageDefaultArgs<ExtArgs>
  }
  export type VintageStepIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    step?: boolean | StepDefaultArgs<ExtArgs>
    vintage?: boolean | VintageDefaultArgs<ExtArgs>
  }

  export type $VintageStepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VintageStep"
    objects: {
      step: Prisma.$StepPayload<ExtArgs>
      vintage: Prisma.$VintagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      vintageStepId: number
      stepId: number
      vintageId: number
      createdAt: Date
    }, ExtArgs["result"]["vintageStep"]>
    composites: {}
  }

  type VintageStepGetPayload<S extends boolean | null | undefined | VintageStepDefaultArgs> = $Result.GetResult<Prisma.$VintageStepPayload, S>

  type VintageStepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VintageStepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VintageStepCountAggregateInputType | true
    }

  export interface VintageStepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VintageStep'], meta: { name: 'VintageStep' } }
    /**
     * Find zero or one VintageStep that matches the filter.
     * @param {VintageStepFindUniqueArgs} args - Arguments to find a VintageStep
     * @example
     * // Get one VintageStep
     * const vintageStep = await prisma.vintageStep.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VintageStepFindUniqueArgs>(args: SelectSubset<T, VintageStepFindUniqueArgs<ExtArgs>>): Prisma__VintageStepClient<$Result.GetResult<Prisma.$VintageStepPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VintageStep that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VintageStepFindUniqueOrThrowArgs} args - Arguments to find a VintageStep
     * @example
     * // Get one VintageStep
     * const vintageStep = await prisma.vintageStep.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VintageStepFindUniqueOrThrowArgs>(args: SelectSubset<T, VintageStepFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VintageStepClient<$Result.GetResult<Prisma.$VintageStepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VintageStep that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VintageStepFindFirstArgs} args - Arguments to find a VintageStep
     * @example
     * // Get one VintageStep
     * const vintageStep = await prisma.vintageStep.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VintageStepFindFirstArgs>(args?: SelectSubset<T, VintageStepFindFirstArgs<ExtArgs>>): Prisma__VintageStepClient<$Result.GetResult<Prisma.$VintageStepPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VintageStep that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VintageStepFindFirstOrThrowArgs} args - Arguments to find a VintageStep
     * @example
     * // Get one VintageStep
     * const vintageStep = await prisma.vintageStep.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VintageStepFindFirstOrThrowArgs>(args?: SelectSubset<T, VintageStepFindFirstOrThrowArgs<ExtArgs>>): Prisma__VintageStepClient<$Result.GetResult<Prisma.$VintageStepPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VintageSteps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VintageStepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VintageSteps
     * const vintageSteps = await prisma.vintageStep.findMany()
     * 
     * // Get first 10 VintageSteps
     * const vintageSteps = await prisma.vintageStep.findMany({ take: 10 })
     * 
     * // Only select the `vintageStepId`
     * const vintageStepWithVintageStepIdOnly = await prisma.vintageStep.findMany({ select: { vintageStepId: true } })
     * 
     */
    findMany<T extends VintageStepFindManyArgs>(args?: SelectSubset<T, VintageStepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VintageStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VintageStep.
     * @param {VintageStepCreateArgs} args - Arguments to create a VintageStep.
     * @example
     * // Create one VintageStep
     * const VintageStep = await prisma.vintageStep.create({
     *   data: {
     *     // ... data to create a VintageStep
     *   }
     * })
     * 
     */
    create<T extends VintageStepCreateArgs>(args: SelectSubset<T, VintageStepCreateArgs<ExtArgs>>): Prisma__VintageStepClient<$Result.GetResult<Prisma.$VintageStepPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VintageSteps.
     * @param {VintageStepCreateManyArgs} args - Arguments to create many VintageSteps.
     * @example
     * // Create many VintageSteps
     * const vintageStep = await prisma.vintageStep.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VintageStepCreateManyArgs>(args?: SelectSubset<T, VintageStepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VintageSteps and returns the data saved in the database.
     * @param {VintageStepCreateManyAndReturnArgs} args - Arguments to create many VintageSteps.
     * @example
     * // Create many VintageSteps
     * const vintageStep = await prisma.vintageStep.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VintageSteps and only return the `vintageStepId`
     * const vintageStepWithVintageStepIdOnly = await prisma.vintageStep.createManyAndReturn({
     *   select: { vintageStepId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VintageStepCreateManyAndReturnArgs>(args?: SelectSubset<T, VintageStepCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VintageStepPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VintageStep.
     * @param {VintageStepDeleteArgs} args - Arguments to delete one VintageStep.
     * @example
     * // Delete one VintageStep
     * const VintageStep = await prisma.vintageStep.delete({
     *   where: {
     *     // ... filter to delete one VintageStep
     *   }
     * })
     * 
     */
    delete<T extends VintageStepDeleteArgs>(args: SelectSubset<T, VintageStepDeleteArgs<ExtArgs>>): Prisma__VintageStepClient<$Result.GetResult<Prisma.$VintageStepPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VintageStep.
     * @param {VintageStepUpdateArgs} args - Arguments to update one VintageStep.
     * @example
     * // Update one VintageStep
     * const vintageStep = await prisma.vintageStep.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VintageStepUpdateArgs>(args: SelectSubset<T, VintageStepUpdateArgs<ExtArgs>>): Prisma__VintageStepClient<$Result.GetResult<Prisma.$VintageStepPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VintageSteps.
     * @param {VintageStepDeleteManyArgs} args - Arguments to filter VintageSteps to delete.
     * @example
     * // Delete a few VintageSteps
     * const { count } = await prisma.vintageStep.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VintageStepDeleteManyArgs>(args?: SelectSubset<T, VintageStepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VintageSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VintageStepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VintageSteps
     * const vintageStep = await prisma.vintageStep.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VintageStepUpdateManyArgs>(args: SelectSubset<T, VintageStepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VintageSteps and returns the data updated in the database.
     * @param {VintageStepUpdateManyAndReturnArgs} args - Arguments to update many VintageSteps.
     * @example
     * // Update many VintageSteps
     * const vintageStep = await prisma.vintageStep.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VintageSteps and only return the `vintageStepId`
     * const vintageStepWithVintageStepIdOnly = await prisma.vintageStep.updateManyAndReturn({
     *   select: { vintageStepId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VintageStepUpdateManyAndReturnArgs>(args: SelectSubset<T, VintageStepUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VintageStepPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VintageStep.
     * @param {VintageStepUpsertArgs} args - Arguments to update or create a VintageStep.
     * @example
     * // Update or create a VintageStep
     * const vintageStep = await prisma.vintageStep.upsert({
     *   create: {
     *     // ... data to create a VintageStep
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VintageStep we want to update
     *   }
     * })
     */
    upsert<T extends VintageStepUpsertArgs>(args: SelectSubset<T, VintageStepUpsertArgs<ExtArgs>>): Prisma__VintageStepClient<$Result.GetResult<Prisma.$VintageStepPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VintageSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VintageStepCountArgs} args - Arguments to filter VintageSteps to count.
     * @example
     * // Count the number of VintageSteps
     * const count = await prisma.vintageStep.count({
     *   where: {
     *     // ... the filter for the VintageSteps we want to count
     *   }
     * })
    **/
    count<T extends VintageStepCountArgs>(
      args?: Subset<T, VintageStepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VintageStepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VintageStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VintageStepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VintageStepAggregateArgs>(args: Subset<T, VintageStepAggregateArgs>): Prisma.PrismaPromise<GetVintageStepAggregateType<T>>

    /**
     * Group by VintageStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VintageStepGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VintageStepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VintageStepGroupByArgs['orderBy'] }
        : { orderBy?: VintageStepGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VintageStepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVintageStepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VintageStep model
   */
  readonly fields: VintageStepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VintageStep.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VintageStepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    step<T extends StepDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StepDefaultArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vintage<T extends VintageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VintageDefaultArgs<ExtArgs>>): Prisma__VintageClient<$Result.GetResult<Prisma.$VintagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VintageStep model
   */
  interface VintageStepFieldRefs {
    readonly vintageStepId: FieldRef<"VintageStep", 'Int'>
    readonly stepId: FieldRef<"VintageStep", 'Int'>
    readonly vintageId: FieldRef<"VintageStep", 'Int'>
    readonly createdAt: FieldRef<"VintageStep", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VintageStep findUnique
   */
  export type VintageStepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VintageStep
     */
    select?: VintageStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VintageStep
     */
    omit?: VintageStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VintageStepInclude<ExtArgs> | null
    /**
     * Filter, which VintageStep to fetch.
     */
    where: VintageStepWhereUniqueInput
  }

  /**
   * VintageStep findUniqueOrThrow
   */
  export type VintageStepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VintageStep
     */
    select?: VintageStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VintageStep
     */
    omit?: VintageStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VintageStepInclude<ExtArgs> | null
    /**
     * Filter, which VintageStep to fetch.
     */
    where: VintageStepWhereUniqueInput
  }

  /**
   * VintageStep findFirst
   */
  export type VintageStepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VintageStep
     */
    select?: VintageStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VintageStep
     */
    omit?: VintageStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VintageStepInclude<ExtArgs> | null
    /**
     * Filter, which VintageStep to fetch.
     */
    where?: VintageStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VintageSteps to fetch.
     */
    orderBy?: VintageStepOrderByWithRelationInput | VintageStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VintageSteps.
     */
    cursor?: VintageStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VintageSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VintageSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VintageSteps.
     */
    distinct?: VintageStepScalarFieldEnum | VintageStepScalarFieldEnum[]
  }

  /**
   * VintageStep findFirstOrThrow
   */
  export type VintageStepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VintageStep
     */
    select?: VintageStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VintageStep
     */
    omit?: VintageStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VintageStepInclude<ExtArgs> | null
    /**
     * Filter, which VintageStep to fetch.
     */
    where?: VintageStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VintageSteps to fetch.
     */
    orderBy?: VintageStepOrderByWithRelationInput | VintageStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VintageSteps.
     */
    cursor?: VintageStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VintageSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VintageSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VintageSteps.
     */
    distinct?: VintageStepScalarFieldEnum | VintageStepScalarFieldEnum[]
  }

  /**
   * VintageStep findMany
   */
  export type VintageStepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VintageStep
     */
    select?: VintageStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VintageStep
     */
    omit?: VintageStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VintageStepInclude<ExtArgs> | null
    /**
     * Filter, which VintageSteps to fetch.
     */
    where?: VintageStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VintageSteps to fetch.
     */
    orderBy?: VintageStepOrderByWithRelationInput | VintageStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VintageSteps.
     */
    cursor?: VintageStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VintageSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VintageSteps.
     */
    skip?: number
    distinct?: VintageStepScalarFieldEnum | VintageStepScalarFieldEnum[]
  }

  /**
   * VintageStep create
   */
  export type VintageStepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VintageStep
     */
    select?: VintageStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VintageStep
     */
    omit?: VintageStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VintageStepInclude<ExtArgs> | null
    /**
     * The data needed to create a VintageStep.
     */
    data: XOR<VintageStepCreateInput, VintageStepUncheckedCreateInput>
  }

  /**
   * VintageStep createMany
   */
  export type VintageStepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VintageSteps.
     */
    data: VintageStepCreateManyInput | VintageStepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VintageStep createManyAndReturn
   */
  export type VintageStepCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VintageStep
     */
    select?: VintageStepSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VintageStep
     */
    omit?: VintageStepOmit<ExtArgs> | null
    /**
     * The data used to create many VintageSteps.
     */
    data: VintageStepCreateManyInput | VintageStepCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VintageStepIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VintageStep update
   */
  export type VintageStepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VintageStep
     */
    select?: VintageStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VintageStep
     */
    omit?: VintageStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VintageStepInclude<ExtArgs> | null
    /**
     * The data needed to update a VintageStep.
     */
    data: XOR<VintageStepUpdateInput, VintageStepUncheckedUpdateInput>
    /**
     * Choose, which VintageStep to update.
     */
    where: VintageStepWhereUniqueInput
  }

  /**
   * VintageStep updateMany
   */
  export type VintageStepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VintageSteps.
     */
    data: XOR<VintageStepUpdateManyMutationInput, VintageStepUncheckedUpdateManyInput>
    /**
     * Filter which VintageSteps to update
     */
    where?: VintageStepWhereInput
    /**
     * Limit how many VintageSteps to update.
     */
    limit?: number
  }

  /**
   * VintageStep updateManyAndReturn
   */
  export type VintageStepUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VintageStep
     */
    select?: VintageStepSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VintageStep
     */
    omit?: VintageStepOmit<ExtArgs> | null
    /**
     * The data used to update VintageSteps.
     */
    data: XOR<VintageStepUpdateManyMutationInput, VintageStepUncheckedUpdateManyInput>
    /**
     * Filter which VintageSteps to update
     */
    where?: VintageStepWhereInput
    /**
     * Limit how many VintageSteps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VintageStepIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VintageStep upsert
   */
  export type VintageStepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VintageStep
     */
    select?: VintageStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VintageStep
     */
    omit?: VintageStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VintageStepInclude<ExtArgs> | null
    /**
     * The filter to search for the VintageStep to update in case it exists.
     */
    where: VintageStepWhereUniqueInput
    /**
     * In case the VintageStep found by the `where` argument doesn't exist, create a new VintageStep with this data.
     */
    create: XOR<VintageStepCreateInput, VintageStepUncheckedCreateInput>
    /**
     * In case the VintageStep was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VintageStepUpdateInput, VintageStepUncheckedUpdateInput>
  }

  /**
   * VintageStep delete
   */
  export type VintageStepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VintageStep
     */
    select?: VintageStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VintageStep
     */
    omit?: VintageStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VintageStepInclude<ExtArgs> | null
    /**
     * Filter which VintageStep to delete.
     */
    where: VintageStepWhereUniqueInput
  }

  /**
   * VintageStep deleteMany
   */
  export type VintageStepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VintageSteps to delete
     */
    where?: VintageStepWhereInput
    /**
     * Limit how many VintageSteps to delete.
     */
    limit?: number
  }

  /**
   * VintageStep without action
   */
  export type VintageStepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VintageStep
     */
    select?: VintageStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VintageStep
     */
    omit?: VintageStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VintageStepInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    productId: number | null
    vintageId: number | null
    formatId: number | null
    price: Decimal | null
  }

  export type ProductSumAggregateOutputType = {
    productId: number | null
    vintageId: number | null
    formatId: number | null
    price: Decimal | null
  }

  export type ProductMinAggregateOutputType = {
    productId: number | null
    vintageId: number | null
    formatId: number | null
    label: string | null
    price: Decimal | null
    createdAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    productId: number | null
    vintageId: number | null
    formatId: number | null
    label: string | null
    price: Decimal | null
    createdAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    productId: number
    vintageId: number
    formatId: number
    label: number
    price: number
    createdAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    productId?: true
    vintageId?: true
    formatId?: true
    price?: true
  }

  export type ProductSumAggregateInputType = {
    productId?: true
    vintageId?: true
    formatId?: true
    price?: true
  }

  export type ProductMinAggregateInputType = {
    productId?: true
    vintageId?: true
    formatId?: true
    label?: true
    price?: true
    createdAt?: true
  }

  export type ProductMaxAggregateInputType = {
    productId?: true
    vintageId?: true
    formatId?: true
    label?: true
    price?: true
    createdAt?: true
  }

  export type ProductCountAggregateInputType = {
    productId?: true
    vintageId?: true
    formatId?: true
    label?: true
    price?: true
    createdAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    productId: number
    vintageId: number
    formatId: number
    label: string
    price: Decimal
    createdAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    vintageId?: boolean
    formatId?: boolean
    label?: boolean
    price?: boolean
    createdAt?: boolean
    vintage?: boolean | VintageDefaultArgs<ExtArgs>
    format?: boolean | FormatDefaultArgs<ExtArgs>
    ticketLines?: boolean | Product$ticketLinesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    vintageId?: boolean
    formatId?: boolean
    label?: boolean
    price?: boolean
    createdAt?: boolean
    vintage?: boolean | VintageDefaultArgs<ExtArgs>
    format?: boolean | FormatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    vintageId?: boolean
    formatId?: boolean
    label?: boolean
    price?: boolean
    createdAt?: boolean
    vintage?: boolean | VintageDefaultArgs<ExtArgs>
    format?: boolean | FormatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    productId?: boolean
    vintageId?: boolean
    formatId?: boolean
    label?: boolean
    price?: boolean
    createdAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"productId" | "vintageId" | "formatId" | "label" | "price" | "createdAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vintage?: boolean | VintageDefaultArgs<ExtArgs>
    format?: boolean | FormatDefaultArgs<ExtArgs>
    ticketLines?: boolean | Product$ticketLinesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vintage?: boolean | VintageDefaultArgs<ExtArgs>
    format?: boolean | FormatDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vintage?: boolean | VintageDefaultArgs<ExtArgs>
    format?: boolean | FormatDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      vintage: Prisma.$VintagePayload<ExtArgs>
      format: Prisma.$FormatPayload<ExtArgs>
      ticketLines: Prisma.$TicketLinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      productId: number
      vintageId: number
      formatId: number
      label: string
      price: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `productId`
     * const productWithProductIdOnly = await prisma.product.findMany({ select: { productId: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `productId`
     * const productWithProductIdOnly = await prisma.product.createManyAndReturn({
     *   select: { productId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `productId`
     * const productWithProductIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { productId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vintage<T extends VintageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VintageDefaultArgs<ExtArgs>>): Prisma__VintageClient<$Result.GetResult<Prisma.$VintagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    format<T extends FormatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormatDefaultArgs<ExtArgs>>): Prisma__FormatClient<$Result.GetResult<Prisma.$FormatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ticketLines<T extends Product$ticketLinesArgs<ExtArgs> = {}>(args?: Subset<T, Product$ticketLinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly productId: FieldRef<"Product", 'Int'>
    readonly vintageId: FieldRef<"Product", 'Int'>
    readonly formatId: FieldRef<"Product", 'Int'>
    readonly label: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Decimal'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.ticketLines
   */
  export type Product$ticketLinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketLine
     */
    select?: TicketLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketLine
     */
    omit?: TicketLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketLineInclude<ExtArgs> | null
    where?: TicketLineWhereInput
    orderBy?: TicketLineOrderByWithRelationInput | TicketLineOrderByWithRelationInput[]
    cursor?: TicketLineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketLineScalarFieldEnum | TicketLineScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Format
   */

  export type AggregateFormat = {
    _count: FormatCountAggregateOutputType | null
    _avg: FormatAvgAggregateOutputType | null
    _sum: FormatSumAggregateOutputType | null
    _min: FormatMinAggregateOutputType | null
    _max: FormatMaxAggregateOutputType | null
  }

  export type FormatAvgAggregateOutputType = {
    formatId: number | null
    quanitity: Decimal | null
  }

  export type FormatSumAggregateOutputType = {
    formatId: number | null
    quanitity: Decimal | null
  }

  export type FormatMinAggregateOutputType = {
    formatId: number | null
    label: string | null
    quanitity: Decimal | null
    unit: string | null
  }

  export type FormatMaxAggregateOutputType = {
    formatId: number | null
    label: string | null
    quanitity: Decimal | null
    unit: string | null
  }

  export type FormatCountAggregateOutputType = {
    formatId: number
    label: number
    quanitity: number
    unit: number
    _all: number
  }


  export type FormatAvgAggregateInputType = {
    formatId?: true
    quanitity?: true
  }

  export type FormatSumAggregateInputType = {
    formatId?: true
    quanitity?: true
  }

  export type FormatMinAggregateInputType = {
    formatId?: true
    label?: true
    quanitity?: true
    unit?: true
  }

  export type FormatMaxAggregateInputType = {
    formatId?: true
    label?: true
    quanitity?: true
    unit?: true
  }

  export type FormatCountAggregateInputType = {
    formatId?: true
    label?: true
    quanitity?: true
    unit?: true
    _all?: true
  }

  export type FormatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Format to aggregate.
     */
    where?: FormatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Formats to fetch.
     */
    orderBy?: FormatOrderByWithRelationInput | FormatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Formats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Formats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Formats
    **/
    _count?: true | FormatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormatMaxAggregateInputType
  }

  export type GetFormatAggregateType<T extends FormatAggregateArgs> = {
        [P in keyof T & keyof AggregateFormat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormat[P]>
      : GetScalarType<T[P], AggregateFormat[P]>
  }




  export type FormatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormatWhereInput
    orderBy?: FormatOrderByWithAggregationInput | FormatOrderByWithAggregationInput[]
    by: FormatScalarFieldEnum[] | FormatScalarFieldEnum
    having?: FormatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormatCountAggregateInputType | true
    _avg?: FormatAvgAggregateInputType
    _sum?: FormatSumAggregateInputType
    _min?: FormatMinAggregateInputType
    _max?: FormatMaxAggregateInputType
  }

  export type FormatGroupByOutputType = {
    formatId: number
    label: string
    quanitity: Decimal
    unit: string
    _count: FormatCountAggregateOutputType | null
    _avg: FormatAvgAggregateOutputType | null
    _sum: FormatSumAggregateOutputType | null
    _min: FormatMinAggregateOutputType | null
    _max: FormatMaxAggregateOutputType | null
  }

  type GetFormatGroupByPayload<T extends FormatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormatGroupByOutputType[P]>
            : GetScalarType<T[P], FormatGroupByOutputType[P]>
        }
      >
    >


  export type FormatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    formatId?: boolean
    label?: boolean
    quanitity?: boolean
    unit?: boolean
    products?: boolean | Format$productsArgs<ExtArgs>
    _count?: boolean | FormatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["format"]>

  export type FormatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    formatId?: boolean
    label?: boolean
    quanitity?: boolean
    unit?: boolean
  }, ExtArgs["result"]["format"]>

  export type FormatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    formatId?: boolean
    label?: boolean
    quanitity?: boolean
    unit?: boolean
  }, ExtArgs["result"]["format"]>

  export type FormatSelectScalar = {
    formatId?: boolean
    label?: boolean
    quanitity?: boolean
    unit?: boolean
  }

  export type FormatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"formatId" | "label" | "quanitity" | "unit", ExtArgs["result"]["format"]>
  export type FormatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Format$productsArgs<ExtArgs>
    _count?: boolean | FormatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FormatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FormatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FormatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Format"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      formatId: number
      label: string
      quanitity: Prisma.Decimal
      unit: string
    }, ExtArgs["result"]["format"]>
    composites: {}
  }

  type FormatGetPayload<S extends boolean | null | undefined | FormatDefaultArgs> = $Result.GetResult<Prisma.$FormatPayload, S>

  type FormatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormatCountAggregateInputType | true
    }

  export interface FormatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Format'], meta: { name: 'Format' } }
    /**
     * Find zero or one Format that matches the filter.
     * @param {FormatFindUniqueArgs} args - Arguments to find a Format
     * @example
     * // Get one Format
     * const format = await prisma.format.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormatFindUniqueArgs>(args: SelectSubset<T, FormatFindUniqueArgs<ExtArgs>>): Prisma__FormatClient<$Result.GetResult<Prisma.$FormatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Format that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormatFindUniqueOrThrowArgs} args - Arguments to find a Format
     * @example
     * // Get one Format
     * const format = await prisma.format.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormatFindUniqueOrThrowArgs>(args: SelectSubset<T, FormatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormatClient<$Result.GetResult<Prisma.$FormatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Format that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormatFindFirstArgs} args - Arguments to find a Format
     * @example
     * // Get one Format
     * const format = await prisma.format.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormatFindFirstArgs>(args?: SelectSubset<T, FormatFindFirstArgs<ExtArgs>>): Prisma__FormatClient<$Result.GetResult<Prisma.$FormatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Format that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormatFindFirstOrThrowArgs} args - Arguments to find a Format
     * @example
     * // Get one Format
     * const format = await prisma.format.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormatFindFirstOrThrowArgs>(args?: SelectSubset<T, FormatFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormatClient<$Result.GetResult<Prisma.$FormatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Formats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Formats
     * const formats = await prisma.format.findMany()
     * 
     * // Get first 10 Formats
     * const formats = await prisma.format.findMany({ take: 10 })
     * 
     * // Only select the `formatId`
     * const formatWithFormatIdOnly = await prisma.format.findMany({ select: { formatId: true } })
     * 
     */
    findMany<T extends FormatFindManyArgs>(args?: SelectSubset<T, FormatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Format.
     * @param {FormatCreateArgs} args - Arguments to create a Format.
     * @example
     * // Create one Format
     * const Format = await prisma.format.create({
     *   data: {
     *     // ... data to create a Format
     *   }
     * })
     * 
     */
    create<T extends FormatCreateArgs>(args: SelectSubset<T, FormatCreateArgs<ExtArgs>>): Prisma__FormatClient<$Result.GetResult<Prisma.$FormatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Formats.
     * @param {FormatCreateManyArgs} args - Arguments to create many Formats.
     * @example
     * // Create many Formats
     * const format = await prisma.format.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormatCreateManyArgs>(args?: SelectSubset<T, FormatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Formats and returns the data saved in the database.
     * @param {FormatCreateManyAndReturnArgs} args - Arguments to create many Formats.
     * @example
     * // Create many Formats
     * const format = await prisma.format.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Formats and only return the `formatId`
     * const formatWithFormatIdOnly = await prisma.format.createManyAndReturn({
     *   select: { formatId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormatCreateManyAndReturnArgs>(args?: SelectSubset<T, FormatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Format.
     * @param {FormatDeleteArgs} args - Arguments to delete one Format.
     * @example
     * // Delete one Format
     * const Format = await prisma.format.delete({
     *   where: {
     *     // ... filter to delete one Format
     *   }
     * })
     * 
     */
    delete<T extends FormatDeleteArgs>(args: SelectSubset<T, FormatDeleteArgs<ExtArgs>>): Prisma__FormatClient<$Result.GetResult<Prisma.$FormatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Format.
     * @param {FormatUpdateArgs} args - Arguments to update one Format.
     * @example
     * // Update one Format
     * const format = await prisma.format.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormatUpdateArgs>(args: SelectSubset<T, FormatUpdateArgs<ExtArgs>>): Prisma__FormatClient<$Result.GetResult<Prisma.$FormatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Formats.
     * @param {FormatDeleteManyArgs} args - Arguments to filter Formats to delete.
     * @example
     * // Delete a few Formats
     * const { count } = await prisma.format.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormatDeleteManyArgs>(args?: SelectSubset<T, FormatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Formats
     * const format = await prisma.format.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormatUpdateManyArgs>(args: SelectSubset<T, FormatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formats and returns the data updated in the database.
     * @param {FormatUpdateManyAndReturnArgs} args - Arguments to update many Formats.
     * @example
     * // Update many Formats
     * const format = await prisma.format.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Formats and only return the `formatId`
     * const formatWithFormatIdOnly = await prisma.format.updateManyAndReturn({
     *   select: { formatId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FormatUpdateManyAndReturnArgs>(args: SelectSubset<T, FormatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Format.
     * @param {FormatUpsertArgs} args - Arguments to update or create a Format.
     * @example
     * // Update or create a Format
     * const format = await prisma.format.upsert({
     *   create: {
     *     // ... data to create a Format
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Format we want to update
     *   }
     * })
     */
    upsert<T extends FormatUpsertArgs>(args: SelectSubset<T, FormatUpsertArgs<ExtArgs>>): Prisma__FormatClient<$Result.GetResult<Prisma.$FormatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Formats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormatCountArgs} args - Arguments to filter Formats to count.
     * @example
     * // Count the number of Formats
     * const count = await prisma.format.count({
     *   where: {
     *     // ... the filter for the Formats we want to count
     *   }
     * })
    **/
    count<T extends FormatCountArgs>(
      args?: Subset<T, FormatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Format.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormatAggregateArgs>(args: Subset<T, FormatAggregateArgs>): Prisma.PrismaPromise<GetFormatAggregateType<T>>

    /**
     * Group by Format.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FormatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormatGroupByArgs['orderBy'] }
        : { orderBy?: FormatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FormatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Format model
   */
  readonly fields: FormatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Format.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Format$productsArgs<ExtArgs> = {}>(args?: Subset<T, Format$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Format model
   */
  interface FormatFieldRefs {
    readonly formatId: FieldRef<"Format", 'Int'>
    readonly label: FieldRef<"Format", 'String'>
    readonly quanitity: FieldRef<"Format", 'Decimal'>
    readonly unit: FieldRef<"Format", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Format findUnique
   */
  export type FormatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Format
     */
    select?: FormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Format
     */
    omit?: FormatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormatInclude<ExtArgs> | null
    /**
     * Filter, which Format to fetch.
     */
    where: FormatWhereUniqueInput
  }

  /**
   * Format findUniqueOrThrow
   */
  export type FormatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Format
     */
    select?: FormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Format
     */
    omit?: FormatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormatInclude<ExtArgs> | null
    /**
     * Filter, which Format to fetch.
     */
    where: FormatWhereUniqueInput
  }

  /**
   * Format findFirst
   */
  export type FormatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Format
     */
    select?: FormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Format
     */
    omit?: FormatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormatInclude<ExtArgs> | null
    /**
     * Filter, which Format to fetch.
     */
    where?: FormatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Formats to fetch.
     */
    orderBy?: FormatOrderByWithRelationInput | FormatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Formats.
     */
    cursor?: FormatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Formats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Formats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Formats.
     */
    distinct?: FormatScalarFieldEnum | FormatScalarFieldEnum[]
  }

  /**
   * Format findFirstOrThrow
   */
  export type FormatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Format
     */
    select?: FormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Format
     */
    omit?: FormatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormatInclude<ExtArgs> | null
    /**
     * Filter, which Format to fetch.
     */
    where?: FormatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Formats to fetch.
     */
    orderBy?: FormatOrderByWithRelationInput | FormatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Formats.
     */
    cursor?: FormatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Formats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Formats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Formats.
     */
    distinct?: FormatScalarFieldEnum | FormatScalarFieldEnum[]
  }

  /**
   * Format findMany
   */
  export type FormatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Format
     */
    select?: FormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Format
     */
    omit?: FormatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormatInclude<ExtArgs> | null
    /**
     * Filter, which Formats to fetch.
     */
    where?: FormatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Formats to fetch.
     */
    orderBy?: FormatOrderByWithRelationInput | FormatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Formats.
     */
    cursor?: FormatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Formats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Formats.
     */
    skip?: number
    distinct?: FormatScalarFieldEnum | FormatScalarFieldEnum[]
  }

  /**
   * Format create
   */
  export type FormatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Format
     */
    select?: FormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Format
     */
    omit?: FormatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormatInclude<ExtArgs> | null
    /**
     * The data needed to create a Format.
     */
    data: XOR<FormatCreateInput, FormatUncheckedCreateInput>
  }

  /**
   * Format createMany
   */
  export type FormatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Formats.
     */
    data: FormatCreateManyInput | FormatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Format createManyAndReturn
   */
  export type FormatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Format
     */
    select?: FormatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Format
     */
    omit?: FormatOmit<ExtArgs> | null
    /**
     * The data used to create many Formats.
     */
    data: FormatCreateManyInput | FormatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Format update
   */
  export type FormatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Format
     */
    select?: FormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Format
     */
    omit?: FormatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormatInclude<ExtArgs> | null
    /**
     * The data needed to update a Format.
     */
    data: XOR<FormatUpdateInput, FormatUncheckedUpdateInput>
    /**
     * Choose, which Format to update.
     */
    where: FormatWhereUniqueInput
  }

  /**
   * Format updateMany
   */
  export type FormatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Formats.
     */
    data: XOR<FormatUpdateManyMutationInput, FormatUncheckedUpdateManyInput>
    /**
     * Filter which Formats to update
     */
    where?: FormatWhereInput
    /**
     * Limit how many Formats to update.
     */
    limit?: number
  }

  /**
   * Format updateManyAndReturn
   */
  export type FormatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Format
     */
    select?: FormatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Format
     */
    omit?: FormatOmit<ExtArgs> | null
    /**
     * The data used to update Formats.
     */
    data: XOR<FormatUpdateManyMutationInput, FormatUncheckedUpdateManyInput>
    /**
     * Filter which Formats to update
     */
    where?: FormatWhereInput
    /**
     * Limit how many Formats to update.
     */
    limit?: number
  }

  /**
   * Format upsert
   */
  export type FormatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Format
     */
    select?: FormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Format
     */
    omit?: FormatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormatInclude<ExtArgs> | null
    /**
     * The filter to search for the Format to update in case it exists.
     */
    where: FormatWhereUniqueInput
    /**
     * In case the Format found by the `where` argument doesn't exist, create a new Format with this data.
     */
    create: XOR<FormatCreateInput, FormatUncheckedCreateInput>
    /**
     * In case the Format was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormatUpdateInput, FormatUncheckedUpdateInput>
  }

  /**
   * Format delete
   */
  export type FormatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Format
     */
    select?: FormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Format
     */
    omit?: FormatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormatInclude<ExtArgs> | null
    /**
     * Filter which Format to delete.
     */
    where: FormatWhereUniqueInput
  }

  /**
   * Format deleteMany
   */
  export type FormatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Formats to delete
     */
    where?: FormatWhereInput
    /**
     * Limit how many Formats to delete.
     */
    limit?: number
  }

  /**
   * Format.products
   */
  export type Format$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Format without action
   */
  export type FormatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Format
     */
    select?: FormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Format
     */
    omit?: FormatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormatInclude<ExtArgs> | null
  }


  /**
   * Model TicketLine
   */

  export type AggregateTicketLine = {
    _count: TicketLineCountAggregateOutputType | null
    _avg: TicketLineAvgAggregateOutputType | null
    _sum: TicketLineSumAggregateOutputType | null
    _min: TicketLineMinAggregateOutputType | null
    _max: TicketLineMaxAggregateOutputType | null
  }

  export type TicketLineAvgAggregateOutputType = {
    ticketLineId: number | null
    ticketId: number | null
    productId: number | null
    quantity: number | null
  }

  export type TicketLineSumAggregateOutputType = {
    ticketLineId: number | null
    ticketId: number | null
    productId: number | null
    quantity: number | null
  }

  export type TicketLineMinAggregateOutputType = {
    ticketLineId: number | null
    ticketId: number | null
    productId: number | null
    quantity: number | null
  }

  export type TicketLineMaxAggregateOutputType = {
    ticketLineId: number | null
    ticketId: number | null
    productId: number | null
    quantity: number | null
  }

  export type TicketLineCountAggregateOutputType = {
    ticketLineId: number
    ticketId: number
    productId: number
    quantity: number
    _all: number
  }


  export type TicketLineAvgAggregateInputType = {
    ticketLineId?: true
    ticketId?: true
    productId?: true
    quantity?: true
  }

  export type TicketLineSumAggregateInputType = {
    ticketLineId?: true
    ticketId?: true
    productId?: true
    quantity?: true
  }

  export type TicketLineMinAggregateInputType = {
    ticketLineId?: true
    ticketId?: true
    productId?: true
    quantity?: true
  }

  export type TicketLineMaxAggregateInputType = {
    ticketLineId?: true
    ticketId?: true
    productId?: true
    quantity?: true
  }

  export type TicketLineCountAggregateInputType = {
    ticketLineId?: true
    ticketId?: true
    productId?: true
    quantity?: true
    _all?: true
  }

  export type TicketLineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketLine to aggregate.
     */
    where?: TicketLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketLines to fetch.
     */
    orderBy?: TicketLineOrderByWithRelationInput | TicketLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketLines
    **/
    _count?: true | TicketLineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketLineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketLineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketLineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketLineMaxAggregateInputType
  }

  export type GetTicketLineAggregateType<T extends TicketLineAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketLine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketLine[P]>
      : GetScalarType<T[P], AggregateTicketLine[P]>
  }




  export type TicketLineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketLineWhereInput
    orderBy?: TicketLineOrderByWithAggregationInput | TicketLineOrderByWithAggregationInput[]
    by: TicketLineScalarFieldEnum[] | TicketLineScalarFieldEnum
    having?: TicketLineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketLineCountAggregateInputType | true
    _avg?: TicketLineAvgAggregateInputType
    _sum?: TicketLineSumAggregateInputType
    _min?: TicketLineMinAggregateInputType
    _max?: TicketLineMaxAggregateInputType
  }

  export type TicketLineGroupByOutputType = {
    ticketLineId: number
    ticketId: number
    productId: number
    quantity: number
    _count: TicketLineCountAggregateOutputType | null
    _avg: TicketLineAvgAggregateOutputType | null
    _sum: TicketLineSumAggregateOutputType | null
    _min: TicketLineMinAggregateOutputType | null
    _max: TicketLineMaxAggregateOutputType | null
  }

  type GetTicketLineGroupByPayload<T extends TicketLineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketLineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketLineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketLineGroupByOutputType[P]>
            : GetScalarType<T[P], TicketLineGroupByOutputType[P]>
        }
      >
    >


  export type TicketLineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticketLineId?: boolean
    ticketId?: boolean
    productId?: boolean
    quantity?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketLine"]>

  export type TicketLineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticketLineId?: boolean
    ticketId?: boolean
    productId?: boolean
    quantity?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketLine"]>

  export type TicketLineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticketLineId?: boolean
    ticketId?: boolean
    productId?: boolean
    quantity?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketLine"]>

  export type TicketLineSelectScalar = {
    ticketLineId?: boolean
    ticketId?: boolean
    productId?: boolean
    quantity?: boolean
  }

  export type TicketLineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ticketLineId" | "ticketId" | "productId" | "quantity", ExtArgs["result"]["ticketLine"]>
  export type TicketLineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }
  export type TicketLineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }
  export type TicketLineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }

  export type $TicketLinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketLine"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      ticket: Prisma.$TicketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ticketLineId: number
      ticketId: number
      productId: number
      quantity: number
    }, ExtArgs["result"]["ticketLine"]>
    composites: {}
  }

  type TicketLineGetPayload<S extends boolean | null | undefined | TicketLineDefaultArgs> = $Result.GetResult<Prisma.$TicketLinePayload, S>

  type TicketLineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketLineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketLineCountAggregateInputType | true
    }

  export interface TicketLineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketLine'], meta: { name: 'TicketLine' } }
    /**
     * Find zero or one TicketLine that matches the filter.
     * @param {TicketLineFindUniqueArgs} args - Arguments to find a TicketLine
     * @example
     * // Get one TicketLine
     * const ticketLine = await prisma.ticketLine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketLineFindUniqueArgs>(args: SelectSubset<T, TicketLineFindUniqueArgs<ExtArgs>>): Prisma__TicketLineClient<$Result.GetResult<Prisma.$TicketLinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketLine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketLineFindUniqueOrThrowArgs} args - Arguments to find a TicketLine
     * @example
     * // Get one TicketLine
     * const ticketLine = await prisma.ticketLine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketLineFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketLineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketLineClient<$Result.GetResult<Prisma.$TicketLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketLine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketLineFindFirstArgs} args - Arguments to find a TicketLine
     * @example
     * // Get one TicketLine
     * const ticketLine = await prisma.ticketLine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketLineFindFirstArgs>(args?: SelectSubset<T, TicketLineFindFirstArgs<ExtArgs>>): Prisma__TicketLineClient<$Result.GetResult<Prisma.$TicketLinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketLine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketLineFindFirstOrThrowArgs} args - Arguments to find a TicketLine
     * @example
     * // Get one TicketLine
     * const ticketLine = await prisma.ticketLine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketLineFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketLineFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketLineClient<$Result.GetResult<Prisma.$TicketLinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketLines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketLineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketLines
     * const ticketLines = await prisma.ticketLine.findMany()
     * 
     * // Get first 10 TicketLines
     * const ticketLines = await prisma.ticketLine.findMany({ take: 10 })
     * 
     * // Only select the `ticketLineId`
     * const ticketLineWithTicketLineIdOnly = await prisma.ticketLine.findMany({ select: { ticketLineId: true } })
     * 
     */
    findMany<T extends TicketLineFindManyArgs>(args?: SelectSubset<T, TicketLineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketLine.
     * @param {TicketLineCreateArgs} args - Arguments to create a TicketLine.
     * @example
     * // Create one TicketLine
     * const TicketLine = await prisma.ticketLine.create({
     *   data: {
     *     // ... data to create a TicketLine
     *   }
     * })
     * 
     */
    create<T extends TicketLineCreateArgs>(args: SelectSubset<T, TicketLineCreateArgs<ExtArgs>>): Prisma__TicketLineClient<$Result.GetResult<Prisma.$TicketLinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketLines.
     * @param {TicketLineCreateManyArgs} args - Arguments to create many TicketLines.
     * @example
     * // Create many TicketLines
     * const ticketLine = await prisma.ticketLine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketLineCreateManyArgs>(args?: SelectSubset<T, TicketLineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketLines and returns the data saved in the database.
     * @param {TicketLineCreateManyAndReturnArgs} args - Arguments to create many TicketLines.
     * @example
     * // Create many TicketLines
     * const ticketLine = await prisma.ticketLine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketLines and only return the `ticketLineId`
     * const ticketLineWithTicketLineIdOnly = await prisma.ticketLine.createManyAndReturn({
     *   select: { ticketLineId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketLineCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketLineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketLinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TicketLine.
     * @param {TicketLineDeleteArgs} args - Arguments to delete one TicketLine.
     * @example
     * // Delete one TicketLine
     * const TicketLine = await prisma.ticketLine.delete({
     *   where: {
     *     // ... filter to delete one TicketLine
     *   }
     * })
     * 
     */
    delete<T extends TicketLineDeleteArgs>(args: SelectSubset<T, TicketLineDeleteArgs<ExtArgs>>): Prisma__TicketLineClient<$Result.GetResult<Prisma.$TicketLinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketLine.
     * @param {TicketLineUpdateArgs} args - Arguments to update one TicketLine.
     * @example
     * // Update one TicketLine
     * const ticketLine = await prisma.ticketLine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketLineUpdateArgs>(args: SelectSubset<T, TicketLineUpdateArgs<ExtArgs>>): Prisma__TicketLineClient<$Result.GetResult<Prisma.$TicketLinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketLines.
     * @param {TicketLineDeleteManyArgs} args - Arguments to filter TicketLines to delete.
     * @example
     * // Delete a few TicketLines
     * const { count } = await prisma.ticketLine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketLineDeleteManyArgs>(args?: SelectSubset<T, TicketLineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketLineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketLines
     * const ticketLine = await prisma.ticketLine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketLineUpdateManyArgs>(args: SelectSubset<T, TicketLineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketLines and returns the data updated in the database.
     * @param {TicketLineUpdateManyAndReturnArgs} args - Arguments to update many TicketLines.
     * @example
     * // Update many TicketLines
     * const ticketLine = await prisma.ticketLine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TicketLines and only return the `ticketLineId`
     * const ticketLineWithTicketLineIdOnly = await prisma.ticketLine.updateManyAndReturn({
     *   select: { ticketLineId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketLineUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketLineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketLinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TicketLine.
     * @param {TicketLineUpsertArgs} args - Arguments to update or create a TicketLine.
     * @example
     * // Update or create a TicketLine
     * const ticketLine = await prisma.ticketLine.upsert({
     *   create: {
     *     // ... data to create a TicketLine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketLine we want to update
     *   }
     * })
     */
    upsert<T extends TicketLineUpsertArgs>(args: SelectSubset<T, TicketLineUpsertArgs<ExtArgs>>): Prisma__TicketLineClient<$Result.GetResult<Prisma.$TicketLinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TicketLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketLineCountArgs} args - Arguments to filter TicketLines to count.
     * @example
     * // Count the number of TicketLines
     * const count = await prisma.ticketLine.count({
     *   where: {
     *     // ... the filter for the TicketLines we want to count
     *   }
     * })
    **/
    count<T extends TicketLineCountArgs>(
      args?: Subset<T, TicketLineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketLineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketLineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketLineAggregateArgs>(args: Subset<T, TicketLineAggregateArgs>): Prisma.PrismaPromise<GetTicketLineAggregateType<T>>

    /**
     * Group by TicketLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketLineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketLineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketLineGroupByArgs['orderBy'] }
        : { orderBy?: TicketLineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketLineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketLine model
   */
  readonly fields: TicketLineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketLine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketLineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TicketLine model
   */
  interface TicketLineFieldRefs {
    readonly ticketLineId: FieldRef<"TicketLine", 'Int'>
    readonly ticketId: FieldRef<"TicketLine", 'Int'>
    readonly productId: FieldRef<"TicketLine", 'Int'>
    readonly quantity: FieldRef<"TicketLine", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TicketLine findUnique
   */
  export type TicketLineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketLine
     */
    select?: TicketLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketLine
     */
    omit?: TicketLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketLineInclude<ExtArgs> | null
    /**
     * Filter, which TicketLine to fetch.
     */
    where: TicketLineWhereUniqueInput
  }

  /**
   * TicketLine findUniqueOrThrow
   */
  export type TicketLineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketLine
     */
    select?: TicketLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketLine
     */
    omit?: TicketLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketLineInclude<ExtArgs> | null
    /**
     * Filter, which TicketLine to fetch.
     */
    where: TicketLineWhereUniqueInput
  }

  /**
   * TicketLine findFirst
   */
  export type TicketLineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketLine
     */
    select?: TicketLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketLine
     */
    omit?: TicketLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketLineInclude<ExtArgs> | null
    /**
     * Filter, which TicketLine to fetch.
     */
    where?: TicketLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketLines to fetch.
     */
    orderBy?: TicketLineOrderByWithRelationInput | TicketLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketLines.
     */
    cursor?: TicketLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketLines.
     */
    distinct?: TicketLineScalarFieldEnum | TicketLineScalarFieldEnum[]
  }

  /**
   * TicketLine findFirstOrThrow
   */
  export type TicketLineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketLine
     */
    select?: TicketLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketLine
     */
    omit?: TicketLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketLineInclude<ExtArgs> | null
    /**
     * Filter, which TicketLine to fetch.
     */
    where?: TicketLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketLines to fetch.
     */
    orderBy?: TicketLineOrderByWithRelationInput | TicketLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketLines.
     */
    cursor?: TicketLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketLines.
     */
    distinct?: TicketLineScalarFieldEnum | TicketLineScalarFieldEnum[]
  }

  /**
   * TicketLine findMany
   */
  export type TicketLineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketLine
     */
    select?: TicketLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketLine
     */
    omit?: TicketLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketLineInclude<ExtArgs> | null
    /**
     * Filter, which TicketLines to fetch.
     */
    where?: TicketLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketLines to fetch.
     */
    orderBy?: TicketLineOrderByWithRelationInput | TicketLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketLines.
     */
    cursor?: TicketLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketLines.
     */
    skip?: number
    distinct?: TicketLineScalarFieldEnum | TicketLineScalarFieldEnum[]
  }

  /**
   * TicketLine create
   */
  export type TicketLineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketLine
     */
    select?: TicketLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketLine
     */
    omit?: TicketLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketLineInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketLine.
     */
    data: XOR<TicketLineCreateInput, TicketLineUncheckedCreateInput>
  }

  /**
   * TicketLine createMany
   */
  export type TicketLineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketLines.
     */
    data: TicketLineCreateManyInput | TicketLineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketLine createManyAndReturn
   */
  export type TicketLineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketLine
     */
    select?: TicketLineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketLine
     */
    omit?: TicketLineOmit<ExtArgs> | null
    /**
     * The data used to create many TicketLines.
     */
    data: TicketLineCreateManyInput | TicketLineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketLineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketLine update
   */
  export type TicketLineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketLine
     */
    select?: TicketLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketLine
     */
    omit?: TicketLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketLineInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketLine.
     */
    data: XOR<TicketLineUpdateInput, TicketLineUncheckedUpdateInput>
    /**
     * Choose, which TicketLine to update.
     */
    where: TicketLineWhereUniqueInput
  }

  /**
   * TicketLine updateMany
   */
  export type TicketLineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketLines.
     */
    data: XOR<TicketLineUpdateManyMutationInput, TicketLineUncheckedUpdateManyInput>
    /**
     * Filter which TicketLines to update
     */
    where?: TicketLineWhereInput
    /**
     * Limit how many TicketLines to update.
     */
    limit?: number
  }

  /**
   * TicketLine updateManyAndReturn
   */
  export type TicketLineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketLine
     */
    select?: TicketLineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketLine
     */
    omit?: TicketLineOmit<ExtArgs> | null
    /**
     * The data used to update TicketLines.
     */
    data: XOR<TicketLineUpdateManyMutationInput, TicketLineUncheckedUpdateManyInput>
    /**
     * Filter which TicketLines to update
     */
    where?: TicketLineWhereInput
    /**
     * Limit how many TicketLines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketLineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketLine upsert
   */
  export type TicketLineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketLine
     */
    select?: TicketLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketLine
     */
    omit?: TicketLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketLineInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketLine to update in case it exists.
     */
    where: TicketLineWhereUniqueInput
    /**
     * In case the TicketLine found by the `where` argument doesn't exist, create a new TicketLine with this data.
     */
    create: XOR<TicketLineCreateInput, TicketLineUncheckedCreateInput>
    /**
     * In case the TicketLine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketLineUpdateInput, TicketLineUncheckedUpdateInput>
  }

  /**
   * TicketLine delete
   */
  export type TicketLineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketLine
     */
    select?: TicketLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketLine
     */
    omit?: TicketLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketLineInclude<ExtArgs> | null
    /**
     * Filter which TicketLine to delete.
     */
    where: TicketLineWhereUniqueInput
  }

  /**
   * TicketLine deleteMany
   */
  export type TicketLineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketLines to delete
     */
    where?: TicketLineWhereInput
    /**
     * Limit how many TicketLines to delete.
     */
    limit?: number
  }

  /**
   * TicketLine without action
   */
  export type TicketLineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketLine
     */
    select?: TicketLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketLine
     */
    omit?: TicketLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketLineInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    ticketId: number | null
    clientId: number | null
  }

  export type TicketSumAggregateOutputType = {
    ticketId: number | null
    clientId: number | null
  }

  export type TicketMinAggregateOutputType = {
    ticketId: number | null
    sellerId: string | null
    clientId: number | null
    state: $Enums.TicketState | null
    createdAt: Date | null
  }

  export type TicketMaxAggregateOutputType = {
    ticketId: number | null
    sellerId: string | null
    clientId: number | null
    state: $Enums.TicketState | null
    createdAt: Date | null
  }

  export type TicketCountAggregateOutputType = {
    ticketId: number
    sellerId: number
    clientId: number
    state: number
    createdAt: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    ticketId?: true
    clientId?: true
  }

  export type TicketSumAggregateInputType = {
    ticketId?: true
    clientId?: true
  }

  export type TicketMinAggregateInputType = {
    ticketId?: true
    sellerId?: true
    clientId?: true
    state?: true
    createdAt?: true
  }

  export type TicketMaxAggregateInputType = {
    ticketId?: true
    sellerId?: true
    clientId?: true
    state?: true
    createdAt?: true
  }

  export type TicketCountAggregateInputType = {
    ticketId?: true
    sellerId?: true
    clientId?: true
    state?: true
    createdAt?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    ticketId: number
    sellerId: string
    clientId: number
    state: $Enums.TicketState
    createdAt: Date
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticketId?: boolean
    sellerId?: boolean
    clientId?: boolean
    state?: boolean
    createdAt?: boolean
    ticketLines?: boolean | Ticket$ticketLinesArgs<ExtArgs>
    seller?: boolean | PersonnelDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    delivery?: boolean | Ticket$deliveryArgs<ExtArgs>
    payment?: boolean | Ticket$paymentArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticketId?: boolean
    sellerId?: boolean
    clientId?: boolean
    state?: boolean
    createdAt?: boolean
    seller?: boolean | PersonnelDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticketId?: boolean
    sellerId?: boolean
    clientId?: boolean
    state?: boolean
    createdAt?: boolean
    seller?: boolean | PersonnelDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    ticketId?: boolean
    sellerId?: boolean
    clientId?: boolean
    state?: boolean
    createdAt?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ticketId" | "sellerId" | "clientId" | "state" | "createdAt", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticketLines?: boolean | Ticket$ticketLinesArgs<ExtArgs>
    seller?: boolean | PersonnelDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    delivery?: boolean | Ticket$deliveryArgs<ExtArgs>
    payment?: boolean | Ticket$paymentArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | PersonnelDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type TicketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | PersonnelDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      ticketLines: Prisma.$TicketLinePayload<ExtArgs>[]
      seller: Prisma.$PersonnelPayload<ExtArgs>
      client: Prisma.$ClientPayload<ExtArgs>
      delivery: Prisma.$DeliveryPayload<ExtArgs> | null
      payment: Prisma.$PaymentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      ticketId: number
      sellerId: string
      clientId: number
      state: $Enums.TicketState
      createdAt: Date
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `ticketId`
     * const ticketWithTicketIdOnly = await prisma.ticket.findMany({ select: { ticketId: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `ticketId`
     * const ticketWithTicketIdOnly = await prisma.ticket.createManyAndReturn({
     *   select: { ticketId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets and returns the data updated in the database.
     * @param {TicketUpdateManyAndReturnArgs} args - Arguments to update many Tickets.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickets and only return the `ticketId`
     * const ticketWithTicketIdOnly = await prisma.ticket.updateManyAndReturn({
     *   select: { ticketId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticketLines<T extends Ticket$ticketLinesArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$ticketLinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    seller<T extends PersonnelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonnelDefaultArgs<ExtArgs>>): Prisma__PersonnelClient<$Result.GetResult<Prisma.$PersonnelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    delivery<T extends Ticket$deliveryArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$deliveryArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payment<T extends Ticket$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$paymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly ticketId: FieldRef<"Ticket", 'Int'>
    readonly sellerId: FieldRef<"Ticket", 'String'>
    readonly clientId: FieldRef<"Ticket", 'Int'>
    readonly state: FieldRef<"Ticket", 'TicketState'>
    readonly createdAt: FieldRef<"Ticket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket updateManyAndReturn
   */
  export type TicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket.ticketLines
   */
  export type Ticket$ticketLinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketLine
     */
    select?: TicketLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketLine
     */
    omit?: TicketLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketLineInclude<ExtArgs> | null
    where?: TicketLineWhereInput
    orderBy?: TicketLineOrderByWithRelationInput | TicketLineOrderByWithRelationInput[]
    cursor?: TicketLineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketLineScalarFieldEnum | TicketLineScalarFieldEnum[]
  }

  /**
   * Ticket.delivery
   */
  export type Ticket$deliveryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    where?: DeliveryWhereInput
  }

  /**
   * Ticket.payment
   */
  export type Ticket$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    clientId: number | null
  }

  export type ClientSumAggregateOutputType = {
    clientId: number | null
  }

  export type ClientMinAggregateOutputType = {
    clientId: number | null
    name: string | null
    lastName: string | null
    adress: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    clientId: number | null
    name: string | null
    lastName: string | null
    adress: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    clientId: number
    name: number
    lastName: number
    adress: number
    email: number
    password: number
    createdAt: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    clientId?: true
  }

  export type ClientSumAggregateInputType = {
    clientId?: true
  }

  export type ClientMinAggregateInputType = {
    clientId?: true
    name?: true
    lastName?: true
    adress?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type ClientMaxAggregateInputType = {
    clientId?: true
    name?: true
    lastName?: true
    adress?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type ClientCountAggregateInputType = {
    clientId?: true
    name?: true
    lastName?: true
    adress?: true
    email?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    clientId: number
    name: string
    lastName: string
    adress: string
    email: string
    password: string
    createdAt: Date
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    clientId?: boolean
    name?: boolean
    lastName?: boolean
    adress?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    tickets?: boolean | Client$ticketsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    clientId?: boolean
    name?: boolean
    lastName?: boolean
    adress?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    clientId?: boolean
    name?: boolean
    lastName?: boolean
    adress?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    clientId?: boolean
    name?: boolean
    lastName?: boolean
    adress?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"clientId" | "name" | "lastName" | "adress" | "email" | "password" | "createdAt", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | Client$ticketsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      clientId: number
      name: string
      lastName: string
      adress: string
      email: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `clientId`
     * const clientWithClientIdOnly = await prisma.client.findMany({ select: { clientId: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `clientId`
     * const clientWithClientIdOnly = await prisma.client.createManyAndReturn({
     *   select: { clientId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `clientId`
     * const clientWithClientIdOnly = await prisma.client.updateManyAndReturn({
     *   select: { clientId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tickets<T extends Client$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Client$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly clientId: FieldRef<"Client", 'Int'>
    readonly name: FieldRef<"Client", 'String'>
    readonly lastName: FieldRef<"Client", 'String'>
    readonly adress: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
    readonly password: FieldRef<"Client", 'String'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.tickets
   */
  export type Client$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Delivery
   */

  export type AggregateDelivery = {
    _count: DeliveryCountAggregateOutputType | null
    _avg: DeliveryAvgAggregateOutputType | null
    _sum: DeliverySumAggregateOutputType | null
    _min: DeliveryMinAggregateOutputType | null
    _max: DeliveryMaxAggregateOutputType | null
  }

  export type DeliveryAvgAggregateOutputType = {
    deliveryId: number | null
    ticketId: number | null
    fee: Decimal | null
  }

  export type DeliverySumAggregateOutputType = {
    deliveryId: number | null
    ticketId: number | null
    fee: Decimal | null
  }

  export type DeliveryMinAggregateOutputType = {
    deliveryId: number | null
    ticketId: number | null
    adress: string | null
    createdAt: Date | null
    state: $Enums.DeliveryState | null
    fee: Decimal | null
  }

  export type DeliveryMaxAggregateOutputType = {
    deliveryId: number | null
    ticketId: number | null
    adress: string | null
    createdAt: Date | null
    state: $Enums.DeliveryState | null
    fee: Decimal | null
  }

  export type DeliveryCountAggregateOutputType = {
    deliveryId: number
    ticketId: number
    adress: number
    createdAt: number
    state: number
    fee: number
    _all: number
  }


  export type DeliveryAvgAggregateInputType = {
    deliveryId?: true
    ticketId?: true
    fee?: true
  }

  export type DeliverySumAggregateInputType = {
    deliveryId?: true
    ticketId?: true
    fee?: true
  }

  export type DeliveryMinAggregateInputType = {
    deliveryId?: true
    ticketId?: true
    adress?: true
    createdAt?: true
    state?: true
    fee?: true
  }

  export type DeliveryMaxAggregateInputType = {
    deliveryId?: true
    ticketId?: true
    adress?: true
    createdAt?: true
    state?: true
    fee?: true
  }

  export type DeliveryCountAggregateInputType = {
    deliveryId?: true
    ticketId?: true
    adress?: true
    createdAt?: true
    state?: true
    fee?: true
    _all?: true
  }

  export type DeliveryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Delivery to aggregate.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deliveries
    **/
    _count?: true | DeliveryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeliveryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeliverySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliveryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliveryMaxAggregateInputType
  }

  export type GetDeliveryAggregateType<T extends DeliveryAggregateArgs> = {
        [P in keyof T & keyof AggregateDelivery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDelivery[P]>
      : GetScalarType<T[P], AggregateDelivery[P]>
  }




  export type DeliveryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryWhereInput
    orderBy?: DeliveryOrderByWithAggregationInput | DeliveryOrderByWithAggregationInput[]
    by: DeliveryScalarFieldEnum[] | DeliveryScalarFieldEnum
    having?: DeliveryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliveryCountAggregateInputType | true
    _avg?: DeliveryAvgAggregateInputType
    _sum?: DeliverySumAggregateInputType
    _min?: DeliveryMinAggregateInputType
    _max?: DeliveryMaxAggregateInputType
  }

  export type DeliveryGroupByOutputType = {
    deliveryId: number
    ticketId: number
    adress: string
    createdAt: Date
    state: $Enums.DeliveryState
    fee: Decimal
    _count: DeliveryCountAggregateOutputType | null
    _avg: DeliveryAvgAggregateOutputType | null
    _sum: DeliverySumAggregateOutputType | null
    _min: DeliveryMinAggregateOutputType | null
    _max: DeliveryMaxAggregateOutputType | null
  }

  type GetDeliveryGroupByPayload<T extends DeliveryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeliveryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliveryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliveryGroupByOutputType[P]>
            : GetScalarType<T[P], DeliveryGroupByOutputType[P]>
        }
      >
    >


  export type DeliverySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deliveryId?: boolean
    ticketId?: boolean
    adress?: boolean
    createdAt?: boolean
    state?: boolean
    fee?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["delivery"]>

  export type DeliverySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deliveryId?: boolean
    ticketId?: boolean
    adress?: boolean
    createdAt?: boolean
    state?: boolean
    fee?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["delivery"]>

  export type DeliverySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deliveryId?: boolean
    ticketId?: boolean
    adress?: boolean
    createdAt?: boolean
    state?: boolean
    fee?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["delivery"]>

  export type DeliverySelectScalar = {
    deliveryId?: boolean
    ticketId?: boolean
    adress?: boolean
    createdAt?: boolean
    state?: boolean
    fee?: boolean
  }

  export type DeliveryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"deliveryId" | "ticketId" | "adress" | "createdAt" | "state" | "fee", ExtArgs["result"]["delivery"]>
  export type DeliveryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }
  export type DeliveryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }
  export type DeliveryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }

  export type $DeliveryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Delivery"
    objects: {
      ticket: Prisma.$TicketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      deliveryId: number
      ticketId: number
      adress: string
      createdAt: Date
      state: $Enums.DeliveryState
      fee: Prisma.Decimal
    }, ExtArgs["result"]["delivery"]>
    composites: {}
  }

  type DeliveryGetPayload<S extends boolean | null | undefined | DeliveryDefaultArgs> = $Result.GetResult<Prisma.$DeliveryPayload, S>

  type DeliveryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeliveryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeliveryCountAggregateInputType | true
    }

  export interface DeliveryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Delivery'], meta: { name: 'Delivery' } }
    /**
     * Find zero or one Delivery that matches the filter.
     * @param {DeliveryFindUniqueArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeliveryFindUniqueArgs>(args: SelectSubset<T, DeliveryFindUniqueArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Delivery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeliveryFindUniqueOrThrowArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeliveryFindUniqueOrThrowArgs>(args: SelectSubset<T, DeliveryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Delivery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryFindFirstArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeliveryFindFirstArgs>(args?: SelectSubset<T, DeliveryFindFirstArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Delivery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryFindFirstOrThrowArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeliveryFindFirstOrThrowArgs>(args?: SelectSubset<T, DeliveryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Deliveries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deliveries
     * const deliveries = await prisma.delivery.findMany()
     * 
     * // Get first 10 Deliveries
     * const deliveries = await prisma.delivery.findMany({ take: 10 })
     * 
     * // Only select the `deliveryId`
     * const deliveryWithDeliveryIdOnly = await prisma.delivery.findMany({ select: { deliveryId: true } })
     * 
     */
    findMany<T extends DeliveryFindManyArgs>(args?: SelectSubset<T, DeliveryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Delivery.
     * @param {DeliveryCreateArgs} args - Arguments to create a Delivery.
     * @example
     * // Create one Delivery
     * const Delivery = await prisma.delivery.create({
     *   data: {
     *     // ... data to create a Delivery
     *   }
     * })
     * 
     */
    create<T extends DeliveryCreateArgs>(args: SelectSubset<T, DeliveryCreateArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Deliveries.
     * @param {DeliveryCreateManyArgs} args - Arguments to create many Deliveries.
     * @example
     * // Create many Deliveries
     * const delivery = await prisma.delivery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeliveryCreateManyArgs>(args?: SelectSubset<T, DeliveryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deliveries and returns the data saved in the database.
     * @param {DeliveryCreateManyAndReturnArgs} args - Arguments to create many Deliveries.
     * @example
     * // Create many Deliveries
     * const delivery = await prisma.delivery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deliveries and only return the `deliveryId`
     * const deliveryWithDeliveryIdOnly = await prisma.delivery.createManyAndReturn({
     *   select: { deliveryId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeliveryCreateManyAndReturnArgs>(args?: SelectSubset<T, DeliveryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Delivery.
     * @param {DeliveryDeleteArgs} args - Arguments to delete one Delivery.
     * @example
     * // Delete one Delivery
     * const Delivery = await prisma.delivery.delete({
     *   where: {
     *     // ... filter to delete one Delivery
     *   }
     * })
     * 
     */
    delete<T extends DeliveryDeleteArgs>(args: SelectSubset<T, DeliveryDeleteArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Delivery.
     * @param {DeliveryUpdateArgs} args - Arguments to update one Delivery.
     * @example
     * // Update one Delivery
     * const delivery = await prisma.delivery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeliveryUpdateArgs>(args: SelectSubset<T, DeliveryUpdateArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Deliveries.
     * @param {DeliveryDeleteManyArgs} args - Arguments to filter Deliveries to delete.
     * @example
     * // Delete a few Deliveries
     * const { count } = await prisma.delivery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeliveryDeleteManyArgs>(args?: SelectSubset<T, DeliveryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deliveries
     * const delivery = await prisma.delivery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeliveryUpdateManyArgs>(args: SelectSubset<T, DeliveryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deliveries and returns the data updated in the database.
     * @param {DeliveryUpdateManyAndReturnArgs} args - Arguments to update many Deliveries.
     * @example
     * // Update many Deliveries
     * const delivery = await prisma.delivery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Deliveries and only return the `deliveryId`
     * const deliveryWithDeliveryIdOnly = await prisma.delivery.updateManyAndReturn({
     *   select: { deliveryId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeliveryUpdateManyAndReturnArgs>(args: SelectSubset<T, DeliveryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Delivery.
     * @param {DeliveryUpsertArgs} args - Arguments to update or create a Delivery.
     * @example
     * // Update or create a Delivery
     * const delivery = await prisma.delivery.upsert({
     *   create: {
     *     // ... data to create a Delivery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Delivery we want to update
     *   }
     * })
     */
    upsert<T extends DeliveryUpsertArgs>(args: SelectSubset<T, DeliveryUpsertArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryCountArgs} args - Arguments to filter Deliveries to count.
     * @example
     * // Count the number of Deliveries
     * const count = await prisma.delivery.count({
     *   where: {
     *     // ... the filter for the Deliveries we want to count
     *   }
     * })
    **/
    count<T extends DeliveryCountArgs>(
      args?: Subset<T, DeliveryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliveryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Delivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeliveryAggregateArgs>(args: Subset<T, DeliveryAggregateArgs>): Prisma.PrismaPromise<GetDeliveryAggregateType<T>>

    /**
     * Group by Delivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeliveryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeliveryGroupByArgs['orderBy'] }
        : { orderBy?: DeliveryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeliveryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Delivery model
   */
  readonly fields: DeliveryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Delivery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeliveryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Delivery model
   */
  interface DeliveryFieldRefs {
    readonly deliveryId: FieldRef<"Delivery", 'Int'>
    readonly ticketId: FieldRef<"Delivery", 'Int'>
    readonly adress: FieldRef<"Delivery", 'String'>
    readonly createdAt: FieldRef<"Delivery", 'DateTime'>
    readonly state: FieldRef<"Delivery", 'DeliveryState'>
    readonly fee: FieldRef<"Delivery", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Delivery findUnique
   */
  export type DeliveryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where: DeliveryWhereUniqueInput
  }

  /**
   * Delivery findUniqueOrThrow
   */
  export type DeliveryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where: DeliveryWhereUniqueInput
  }

  /**
   * Delivery findFirst
   */
  export type DeliveryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deliveries.
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deliveries.
     */
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * Delivery findFirstOrThrow
   */
  export type DeliveryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deliveries.
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deliveries.
     */
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * Delivery findMany
   */
  export type DeliveryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Deliveries to fetch.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deliveries.
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * Delivery create
   */
  export type DeliveryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * The data needed to create a Delivery.
     */
    data: XOR<DeliveryCreateInput, DeliveryUncheckedCreateInput>
  }

  /**
   * Delivery createMany
   */
  export type DeliveryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deliveries.
     */
    data: DeliveryCreateManyInput | DeliveryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Delivery createManyAndReturn
   */
  export type DeliveryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * The data used to create many Deliveries.
     */
    data: DeliveryCreateManyInput | DeliveryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Delivery update
   */
  export type DeliveryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * The data needed to update a Delivery.
     */
    data: XOR<DeliveryUpdateInput, DeliveryUncheckedUpdateInput>
    /**
     * Choose, which Delivery to update.
     */
    where: DeliveryWhereUniqueInput
  }

  /**
   * Delivery updateMany
   */
  export type DeliveryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deliveries.
     */
    data: XOR<DeliveryUpdateManyMutationInput, DeliveryUncheckedUpdateManyInput>
    /**
     * Filter which Deliveries to update
     */
    where?: DeliveryWhereInput
    /**
     * Limit how many Deliveries to update.
     */
    limit?: number
  }

  /**
   * Delivery updateManyAndReturn
   */
  export type DeliveryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * The data used to update Deliveries.
     */
    data: XOR<DeliveryUpdateManyMutationInput, DeliveryUncheckedUpdateManyInput>
    /**
     * Filter which Deliveries to update
     */
    where?: DeliveryWhereInput
    /**
     * Limit how many Deliveries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Delivery upsert
   */
  export type DeliveryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * The filter to search for the Delivery to update in case it exists.
     */
    where: DeliveryWhereUniqueInput
    /**
     * In case the Delivery found by the `where` argument doesn't exist, create a new Delivery with this data.
     */
    create: XOR<DeliveryCreateInput, DeliveryUncheckedCreateInput>
    /**
     * In case the Delivery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeliveryUpdateInput, DeliveryUncheckedUpdateInput>
  }

  /**
   * Delivery delete
   */
  export type DeliveryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter which Delivery to delete.
     */
    where: DeliveryWhereUniqueInput
  }

  /**
   * Delivery deleteMany
   */
  export type DeliveryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deliveries to delete
     */
    where?: DeliveryWhereInput
    /**
     * Limit how many Deliveries to delete.
     */
    limit?: number
  }

  /**
   * Delivery without action
   */
  export type DeliveryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    paymentId: number | null
    ticketId: number | null
    amount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    paymentId: number | null
    ticketId: number | null
    amount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    paymentId: number | null
    cashierId: string | null
    ticketId: number | null
    amount: Decimal | null
    createdAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    paymentId: number | null
    cashierId: string | null
    ticketId: number | null
    amount: Decimal | null
    createdAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    paymentId: number
    cashierId: number
    ticketId: number
    amount: number
    createdAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    paymentId?: true
    ticketId?: true
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    paymentId?: true
    ticketId?: true
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    paymentId?: true
    cashierId?: true
    ticketId?: true
    amount?: true
    createdAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    paymentId?: true
    cashierId?: true
    ticketId?: true
    amount?: true
    createdAt?: true
  }

  export type PaymentCountAggregateInputType = {
    paymentId?: true
    cashierId?: true
    ticketId?: true
    amount?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    paymentId: number
    cashierId: string
    ticketId: number
    amount: Decimal
    createdAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    paymentId?: boolean
    cashierId?: boolean
    ticketId?: boolean
    amount?: boolean
    createdAt?: boolean
    cashier?: boolean | PersonnelDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    paymentId?: boolean
    cashierId?: boolean
    ticketId?: boolean
    amount?: boolean
    createdAt?: boolean
    cashier?: boolean | PersonnelDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    paymentId?: boolean
    cashierId?: boolean
    ticketId?: boolean
    amount?: boolean
    createdAt?: boolean
    cashier?: boolean | PersonnelDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    paymentId?: boolean
    cashierId?: boolean
    ticketId?: boolean
    amount?: boolean
    createdAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"paymentId" | "cashierId" | "ticketId" | "amount" | "createdAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cashier?: boolean | PersonnelDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cashier?: boolean | PersonnelDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cashier?: boolean | PersonnelDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      cashier: Prisma.$PersonnelPayload<ExtArgs>
      ticket: Prisma.$TicketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      paymentId: number
      cashierId: string
      ticketId: number
      amount: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `paymentId`
     * const paymentWithPaymentIdOnly = await prisma.payment.findMany({ select: { paymentId: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `paymentId`
     * const paymentWithPaymentIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { paymentId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `paymentId`
     * const paymentWithPaymentIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { paymentId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cashier<T extends PersonnelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonnelDefaultArgs<ExtArgs>>): Prisma__PersonnelClient<$Result.GetResult<Prisma.$PersonnelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly paymentId: FieldRef<"Payment", 'Int'>
    readonly cashierId: FieldRef<"Payment", 'String'>
    readonly ticketId: FieldRef<"Payment", 'Int'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PersonnelScalarFieldEnum: {
    personnelId: 'personnelId',
    name: 'name',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type PersonnelScalarFieldEnum = (typeof PersonnelScalarFieldEnum)[keyof typeof PersonnelScalarFieldEnum]


  export const IngredientScalarFieldEnum: {
    ingredientId: 'ingredientId',
    productorId: 'productorId',
    label: 'label',
    quantity: 'quantity',
    threshold: 'threshold',
    provider: 'provider',
    createdAt: 'createdAt'
  };

  export type IngredientScalarFieldEnum = (typeof IngredientScalarFieldEnum)[keyof typeof IngredientScalarFieldEnum]


  export const StepScalarFieldEnum: {
    stepId: 'stepId',
    productorId: 'productorId',
    label: 'label',
    duration: 'duration',
    unit: 'unit',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type StepScalarFieldEnum = (typeof StepScalarFieldEnum)[keyof typeof StepScalarFieldEnum]


  export const VintageScalarFieldEnum: {
    vintageId: 'vintageId',
    productorId: 'productorId',
    label: 'label',
    quality: 'quality',
    createdAt: 'createdAt'
  };

  export type VintageScalarFieldEnum = (typeof VintageScalarFieldEnum)[keyof typeof VintageScalarFieldEnum]


  export const VintageStepScalarFieldEnum: {
    vintageStepId: 'vintageStepId',
    stepId: 'stepId',
    vintageId: 'vintageId',
    createdAt: 'createdAt'
  };

  export type VintageStepScalarFieldEnum = (typeof VintageStepScalarFieldEnum)[keyof typeof VintageStepScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    productId: 'productId',
    vintageId: 'vintageId',
    formatId: 'formatId',
    label: 'label',
    price: 'price',
    createdAt: 'createdAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const FormatScalarFieldEnum: {
    formatId: 'formatId',
    label: 'label',
    quanitity: 'quanitity',
    unit: 'unit'
  };

  export type FormatScalarFieldEnum = (typeof FormatScalarFieldEnum)[keyof typeof FormatScalarFieldEnum]


  export const TicketLineScalarFieldEnum: {
    ticketLineId: 'ticketLineId',
    ticketId: 'ticketId',
    productId: 'productId',
    quantity: 'quantity'
  };

  export type TicketLineScalarFieldEnum = (typeof TicketLineScalarFieldEnum)[keyof typeof TicketLineScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    ticketId: 'ticketId',
    sellerId: 'sellerId',
    clientId: 'clientId',
    state: 'state',
    createdAt: 'createdAt'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    clientId: 'clientId',
    name: 'name',
    lastName: 'lastName',
    adress: 'adress',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const DeliveryScalarFieldEnum: {
    deliveryId: 'deliveryId',
    ticketId: 'ticketId',
    adress: 'adress',
    createdAt: 'createdAt',
    state: 'state',
    fee: 'fee'
  };

  export type DeliveryScalarFieldEnum = (typeof DeliveryScalarFieldEnum)[keyof typeof DeliveryScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    paymentId: 'paymentId',
    cashierId: 'cashierId',
    ticketId: 'ticketId',
    amount: 'amount',
    createdAt: 'createdAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DurationUnit'
   */
  export type EnumDurationUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DurationUnit'>
    


  /**
   * Reference to a field of type 'DurationUnit[]'
   */
  export type ListEnumDurationUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DurationUnit[]'>
    


  /**
   * Reference to a field of type 'TicketState'
   */
  export type EnumTicketStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketState'>
    


  /**
   * Reference to a field of type 'TicketState[]'
   */
  export type ListEnumTicketStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketState[]'>
    


  /**
   * Reference to a field of type 'DeliveryState'
   */
  export type EnumDeliveryStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryState'>
    


  /**
   * Reference to a field of type 'DeliveryState[]'
   */
  export type ListEnumDeliveryStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryState[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PersonnelWhereInput = {
    AND?: PersonnelWhereInput | PersonnelWhereInput[]
    OR?: PersonnelWhereInput[]
    NOT?: PersonnelWhereInput | PersonnelWhereInput[]
    personnelId?: StringFilter<"Personnel"> | string
    name?: StringFilter<"Personnel"> | string
    lastName?: StringFilter<"Personnel"> | string
    email?: StringFilter<"Personnel"> | string
    password?: StringFilter<"Personnel"> | string
    role?: EnumRoleFilter<"Personnel"> | $Enums.Role
    createdAt?: DateTimeFilter<"Personnel"> | Date | string
    ingredients?: IngredientListRelationFilter
    steps?: StepListRelationFilter
    tickets?: TicketListRelationFilter
    payments?: PaymentListRelationFilter
  }

  export type PersonnelOrderByWithRelationInput = {
    personnelId?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    ingredients?: IngredientOrderByRelationAggregateInput
    steps?: StepOrderByRelationAggregateInput
    tickets?: TicketOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type PersonnelWhereUniqueInput = Prisma.AtLeast<{
    personnelId?: string
    email?: string
    AND?: PersonnelWhereInput | PersonnelWhereInput[]
    OR?: PersonnelWhereInput[]
    NOT?: PersonnelWhereInput | PersonnelWhereInput[]
    name?: StringFilter<"Personnel"> | string
    lastName?: StringFilter<"Personnel"> | string
    password?: StringFilter<"Personnel"> | string
    role?: EnumRoleFilter<"Personnel"> | $Enums.Role
    createdAt?: DateTimeFilter<"Personnel"> | Date | string
    ingredients?: IngredientListRelationFilter
    steps?: StepListRelationFilter
    tickets?: TicketListRelationFilter
    payments?: PaymentListRelationFilter
  }, "personnelId" | "email">

  export type PersonnelOrderByWithAggregationInput = {
    personnelId?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: PersonnelCountOrderByAggregateInput
    _max?: PersonnelMaxOrderByAggregateInput
    _min?: PersonnelMinOrderByAggregateInput
  }

  export type PersonnelScalarWhereWithAggregatesInput = {
    AND?: PersonnelScalarWhereWithAggregatesInput | PersonnelScalarWhereWithAggregatesInput[]
    OR?: PersonnelScalarWhereWithAggregatesInput[]
    NOT?: PersonnelScalarWhereWithAggregatesInput | PersonnelScalarWhereWithAggregatesInput[]
    personnelId?: StringWithAggregatesFilter<"Personnel"> | string
    name?: StringWithAggregatesFilter<"Personnel"> | string
    lastName?: StringWithAggregatesFilter<"Personnel"> | string
    email?: StringWithAggregatesFilter<"Personnel"> | string
    password?: StringWithAggregatesFilter<"Personnel"> | string
    role?: EnumRoleWithAggregatesFilter<"Personnel"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"Personnel"> | Date | string
  }

  export type IngredientWhereInput = {
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    ingredientId?: IntFilter<"Ingredient"> | number
    productorId?: StringFilter<"Ingredient"> | string
    label?: StringFilter<"Ingredient"> | string
    quantity?: DecimalFilter<"Ingredient"> | Decimal | DecimalJsLike | number | string
    threshold?: DecimalFilter<"Ingredient"> | Decimal | DecimalJsLike | number | string
    provider?: StringFilter<"Ingredient"> | string
    createdAt?: DateTimeFilter<"Ingredient"> | Date | string
    productor?: XOR<PersonnelScalarRelationFilter, PersonnelWhereInput>
  }

  export type IngredientOrderByWithRelationInput = {
    ingredientId?: SortOrder
    productorId?: SortOrder
    label?: SortOrder
    quantity?: SortOrder
    threshold?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    productor?: PersonnelOrderByWithRelationInput
  }

  export type IngredientWhereUniqueInput = Prisma.AtLeast<{
    ingredientId?: number
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    productorId?: StringFilter<"Ingredient"> | string
    label?: StringFilter<"Ingredient"> | string
    quantity?: DecimalFilter<"Ingredient"> | Decimal | DecimalJsLike | number | string
    threshold?: DecimalFilter<"Ingredient"> | Decimal | DecimalJsLike | number | string
    provider?: StringFilter<"Ingredient"> | string
    createdAt?: DateTimeFilter<"Ingredient"> | Date | string
    productor?: XOR<PersonnelScalarRelationFilter, PersonnelWhereInput>
  }, "ingredientId">

  export type IngredientOrderByWithAggregationInput = {
    ingredientId?: SortOrder
    productorId?: SortOrder
    label?: SortOrder
    quantity?: SortOrder
    threshold?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    _count?: IngredientCountOrderByAggregateInput
    _avg?: IngredientAvgOrderByAggregateInput
    _max?: IngredientMaxOrderByAggregateInput
    _min?: IngredientMinOrderByAggregateInput
    _sum?: IngredientSumOrderByAggregateInput
  }

  export type IngredientScalarWhereWithAggregatesInput = {
    AND?: IngredientScalarWhereWithAggregatesInput | IngredientScalarWhereWithAggregatesInput[]
    OR?: IngredientScalarWhereWithAggregatesInput[]
    NOT?: IngredientScalarWhereWithAggregatesInput | IngredientScalarWhereWithAggregatesInput[]
    ingredientId?: IntWithAggregatesFilter<"Ingredient"> | number
    productorId?: StringWithAggregatesFilter<"Ingredient"> | string
    label?: StringWithAggregatesFilter<"Ingredient"> | string
    quantity?: DecimalWithAggregatesFilter<"Ingredient"> | Decimal | DecimalJsLike | number | string
    threshold?: DecimalWithAggregatesFilter<"Ingredient"> | Decimal | DecimalJsLike | number | string
    provider?: StringWithAggregatesFilter<"Ingredient"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Ingredient"> | Date | string
  }

  export type StepWhereInput = {
    AND?: StepWhereInput | StepWhereInput[]
    OR?: StepWhereInput[]
    NOT?: StepWhereInput | StepWhereInput[]
    stepId?: IntFilter<"Step"> | number
    productorId?: StringFilter<"Step"> | string
    label?: StringFilter<"Step"> | string
    duration?: IntFilter<"Step"> | number
    unit?: EnumDurationUnitFilter<"Step"> | $Enums.DurationUnit
    description?: StringFilter<"Step"> | string
    createdAt?: DateTimeFilter<"Step"> | Date | string
    productor?: XOR<PersonnelScalarRelationFilter, PersonnelWhereInput>
    vintages?: VintageStepListRelationFilter
  }

  export type StepOrderByWithRelationInput = {
    stepId?: SortOrder
    productorId?: SortOrder
    label?: SortOrder
    duration?: SortOrder
    unit?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    productor?: PersonnelOrderByWithRelationInput
    vintages?: VintageStepOrderByRelationAggregateInput
  }

  export type StepWhereUniqueInput = Prisma.AtLeast<{
    stepId?: number
    AND?: StepWhereInput | StepWhereInput[]
    OR?: StepWhereInput[]
    NOT?: StepWhereInput | StepWhereInput[]
    productorId?: StringFilter<"Step"> | string
    label?: StringFilter<"Step"> | string
    duration?: IntFilter<"Step"> | number
    unit?: EnumDurationUnitFilter<"Step"> | $Enums.DurationUnit
    description?: StringFilter<"Step"> | string
    createdAt?: DateTimeFilter<"Step"> | Date | string
    productor?: XOR<PersonnelScalarRelationFilter, PersonnelWhereInput>
    vintages?: VintageStepListRelationFilter
  }, "stepId">

  export type StepOrderByWithAggregationInput = {
    stepId?: SortOrder
    productorId?: SortOrder
    label?: SortOrder
    duration?: SortOrder
    unit?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    _count?: StepCountOrderByAggregateInput
    _avg?: StepAvgOrderByAggregateInput
    _max?: StepMaxOrderByAggregateInput
    _min?: StepMinOrderByAggregateInput
    _sum?: StepSumOrderByAggregateInput
  }

  export type StepScalarWhereWithAggregatesInput = {
    AND?: StepScalarWhereWithAggregatesInput | StepScalarWhereWithAggregatesInput[]
    OR?: StepScalarWhereWithAggregatesInput[]
    NOT?: StepScalarWhereWithAggregatesInput | StepScalarWhereWithAggregatesInput[]
    stepId?: IntWithAggregatesFilter<"Step"> | number
    productorId?: StringWithAggregatesFilter<"Step"> | string
    label?: StringWithAggregatesFilter<"Step"> | string
    duration?: IntWithAggregatesFilter<"Step"> | number
    unit?: EnumDurationUnitWithAggregatesFilter<"Step"> | $Enums.DurationUnit
    description?: StringWithAggregatesFilter<"Step"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Step"> | Date | string
  }

  export type VintageWhereInput = {
    AND?: VintageWhereInput | VintageWhereInput[]
    OR?: VintageWhereInput[]
    NOT?: VintageWhereInput | VintageWhereInput[]
    vintageId?: IntFilter<"Vintage"> | number
    productorId?: StringFilter<"Vintage"> | string
    label?: StringFilter<"Vintage"> | string
    quality?: StringFilter<"Vintage"> | string
    createdAt?: DateTimeFilter<"Vintage"> | Date | string
    steps?: VintageStepListRelationFilter
    products?: ProductListRelationFilter
  }

  export type VintageOrderByWithRelationInput = {
    vintageId?: SortOrder
    productorId?: SortOrder
    label?: SortOrder
    quality?: SortOrder
    createdAt?: SortOrder
    steps?: VintageStepOrderByRelationAggregateInput
    products?: ProductOrderByRelationAggregateInput
  }

  export type VintageWhereUniqueInput = Prisma.AtLeast<{
    vintageId?: number
    AND?: VintageWhereInput | VintageWhereInput[]
    OR?: VintageWhereInput[]
    NOT?: VintageWhereInput | VintageWhereInput[]
    productorId?: StringFilter<"Vintage"> | string
    label?: StringFilter<"Vintage"> | string
    quality?: StringFilter<"Vintage"> | string
    createdAt?: DateTimeFilter<"Vintage"> | Date | string
    steps?: VintageStepListRelationFilter
    products?: ProductListRelationFilter
  }, "vintageId">

  export type VintageOrderByWithAggregationInput = {
    vintageId?: SortOrder
    productorId?: SortOrder
    label?: SortOrder
    quality?: SortOrder
    createdAt?: SortOrder
    _count?: VintageCountOrderByAggregateInput
    _avg?: VintageAvgOrderByAggregateInput
    _max?: VintageMaxOrderByAggregateInput
    _min?: VintageMinOrderByAggregateInput
    _sum?: VintageSumOrderByAggregateInput
  }

  export type VintageScalarWhereWithAggregatesInput = {
    AND?: VintageScalarWhereWithAggregatesInput | VintageScalarWhereWithAggregatesInput[]
    OR?: VintageScalarWhereWithAggregatesInput[]
    NOT?: VintageScalarWhereWithAggregatesInput | VintageScalarWhereWithAggregatesInput[]
    vintageId?: IntWithAggregatesFilter<"Vintage"> | number
    productorId?: StringWithAggregatesFilter<"Vintage"> | string
    label?: StringWithAggregatesFilter<"Vintage"> | string
    quality?: StringWithAggregatesFilter<"Vintage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Vintage"> | Date | string
  }

  export type VintageStepWhereInput = {
    AND?: VintageStepWhereInput | VintageStepWhereInput[]
    OR?: VintageStepWhereInput[]
    NOT?: VintageStepWhereInput | VintageStepWhereInput[]
    vintageStepId?: IntFilter<"VintageStep"> | number
    stepId?: IntFilter<"VintageStep"> | number
    vintageId?: IntFilter<"VintageStep"> | number
    createdAt?: DateTimeFilter<"VintageStep"> | Date | string
    step?: XOR<StepScalarRelationFilter, StepWhereInput>
    vintage?: XOR<VintageScalarRelationFilter, VintageWhereInput>
  }

  export type VintageStepOrderByWithRelationInput = {
    vintageStepId?: SortOrder
    stepId?: SortOrder
    vintageId?: SortOrder
    createdAt?: SortOrder
    step?: StepOrderByWithRelationInput
    vintage?: VintageOrderByWithRelationInput
  }

  export type VintageStepWhereUniqueInput = Prisma.AtLeast<{
    vintageStepId?: number
    vintageId_stepId?: VintageStepVintageIdStepIdCompoundUniqueInput
    AND?: VintageStepWhereInput | VintageStepWhereInput[]
    OR?: VintageStepWhereInput[]
    NOT?: VintageStepWhereInput | VintageStepWhereInput[]
    stepId?: IntFilter<"VintageStep"> | number
    vintageId?: IntFilter<"VintageStep"> | number
    createdAt?: DateTimeFilter<"VintageStep"> | Date | string
    step?: XOR<StepScalarRelationFilter, StepWhereInput>
    vintage?: XOR<VintageScalarRelationFilter, VintageWhereInput>
  }, "vintageStepId" | "vintageId_stepId">

  export type VintageStepOrderByWithAggregationInput = {
    vintageStepId?: SortOrder
    stepId?: SortOrder
    vintageId?: SortOrder
    createdAt?: SortOrder
    _count?: VintageStepCountOrderByAggregateInput
    _avg?: VintageStepAvgOrderByAggregateInput
    _max?: VintageStepMaxOrderByAggregateInput
    _min?: VintageStepMinOrderByAggregateInput
    _sum?: VintageStepSumOrderByAggregateInput
  }

  export type VintageStepScalarWhereWithAggregatesInput = {
    AND?: VintageStepScalarWhereWithAggregatesInput | VintageStepScalarWhereWithAggregatesInput[]
    OR?: VintageStepScalarWhereWithAggregatesInput[]
    NOT?: VintageStepScalarWhereWithAggregatesInput | VintageStepScalarWhereWithAggregatesInput[]
    vintageStepId?: IntWithAggregatesFilter<"VintageStep"> | number
    stepId?: IntWithAggregatesFilter<"VintageStep"> | number
    vintageId?: IntWithAggregatesFilter<"VintageStep"> | number
    createdAt?: DateTimeWithAggregatesFilter<"VintageStep"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    productId?: IntFilter<"Product"> | number
    vintageId?: IntFilter<"Product"> | number
    formatId?: IntFilter<"Product"> | number
    label?: StringFilter<"Product"> | string
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    vintage?: XOR<VintageScalarRelationFilter, VintageWhereInput>
    format?: XOR<FormatScalarRelationFilter, FormatWhereInput>
    ticketLines?: TicketLineListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    productId?: SortOrder
    vintageId?: SortOrder
    formatId?: SortOrder
    label?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    vintage?: VintageOrderByWithRelationInput
    format?: FormatOrderByWithRelationInput
    ticketLines?: TicketLineOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    productId?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    vintageId?: IntFilter<"Product"> | number
    formatId?: IntFilter<"Product"> | number
    label?: StringFilter<"Product"> | string
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    vintage?: XOR<VintageScalarRelationFilter, VintageWhereInput>
    format?: XOR<FormatScalarRelationFilter, FormatWhereInput>
    ticketLines?: TicketLineListRelationFilter
  }, "productId">

  export type ProductOrderByWithAggregationInput = {
    productId?: SortOrder
    vintageId?: SortOrder
    formatId?: SortOrder
    label?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    productId?: IntWithAggregatesFilter<"Product"> | number
    vintageId?: IntWithAggregatesFilter<"Product"> | number
    formatId?: IntWithAggregatesFilter<"Product"> | number
    label?: StringWithAggregatesFilter<"Product"> | string
    price?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type FormatWhereInput = {
    AND?: FormatWhereInput | FormatWhereInput[]
    OR?: FormatWhereInput[]
    NOT?: FormatWhereInput | FormatWhereInput[]
    formatId?: IntFilter<"Format"> | number
    label?: StringFilter<"Format"> | string
    quanitity?: DecimalFilter<"Format"> | Decimal | DecimalJsLike | number | string
    unit?: StringFilter<"Format"> | string
    products?: ProductListRelationFilter
  }

  export type FormatOrderByWithRelationInput = {
    formatId?: SortOrder
    label?: SortOrder
    quanitity?: SortOrder
    unit?: SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type FormatWhereUniqueInput = Prisma.AtLeast<{
    formatId?: number
    AND?: FormatWhereInput | FormatWhereInput[]
    OR?: FormatWhereInput[]
    NOT?: FormatWhereInput | FormatWhereInput[]
    label?: StringFilter<"Format"> | string
    quanitity?: DecimalFilter<"Format"> | Decimal | DecimalJsLike | number | string
    unit?: StringFilter<"Format"> | string
    products?: ProductListRelationFilter
  }, "formatId">

  export type FormatOrderByWithAggregationInput = {
    formatId?: SortOrder
    label?: SortOrder
    quanitity?: SortOrder
    unit?: SortOrder
    _count?: FormatCountOrderByAggregateInput
    _avg?: FormatAvgOrderByAggregateInput
    _max?: FormatMaxOrderByAggregateInput
    _min?: FormatMinOrderByAggregateInput
    _sum?: FormatSumOrderByAggregateInput
  }

  export type FormatScalarWhereWithAggregatesInput = {
    AND?: FormatScalarWhereWithAggregatesInput | FormatScalarWhereWithAggregatesInput[]
    OR?: FormatScalarWhereWithAggregatesInput[]
    NOT?: FormatScalarWhereWithAggregatesInput | FormatScalarWhereWithAggregatesInput[]
    formatId?: IntWithAggregatesFilter<"Format"> | number
    label?: StringWithAggregatesFilter<"Format"> | string
    quanitity?: DecimalWithAggregatesFilter<"Format"> | Decimal | DecimalJsLike | number | string
    unit?: StringWithAggregatesFilter<"Format"> | string
  }

  export type TicketLineWhereInput = {
    AND?: TicketLineWhereInput | TicketLineWhereInput[]
    OR?: TicketLineWhereInput[]
    NOT?: TicketLineWhereInput | TicketLineWhereInput[]
    ticketLineId?: IntFilter<"TicketLine"> | number
    ticketId?: IntFilter<"TicketLine"> | number
    productId?: IntFilter<"TicketLine"> | number
    quantity?: IntFilter<"TicketLine"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }

  export type TicketLineOrderByWithRelationInput = {
    ticketLineId?: SortOrder
    ticketId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    product?: ProductOrderByWithRelationInput
    ticket?: TicketOrderByWithRelationInput
  }

  export type TicketLineWhereUniqueInput = Prisma.AtLeast<{
    ticketLineId?: number
    AND?: TicketLineWhereInput | TicketLineWhereInput[]
    OR?: TicketLineWhereInput[]
    NOT?: TicketLineWhereInput | TicketLineWhereInput[]
    ticketId?: IntFilter<"TicketLine"> | number
    productId?: IntFilter<"TicketLine"> | number
    quantity?: IntFilter<"TicketLine"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }, "ticketLineId">

  export type TicketLineOrderByWithAggregationInput = {
    ticketLineId?: SortOrder
    ticketId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    _count?: TicketLineCountOrderByAggregateInput
    _avg?: TicketLineAvgOrderByAggregateInput
    _max?: TicketLineMaxOrderByAggregateInput
    _min?: TicketLineMinOrderByAggregateInput
    _sum?: TicketLineSumOrderByAggregateInput
  }

  export type TicketLineScalarWhereWithAggregatesInput = {
    AND?: TicketLineScalarWhereWithAggregatesInput | TicketLineScalarWhereWithAggregatesInput[]
    OR?: TicketLineScalarWhereWithAggregatesInput[]
    NOT?: TicketLineScalarWhereWithAggregatesInput | TicketLineScalarWhereWithAggregatesInput[]
    ticketLineId?: IntWithAggregatesFilter<"TicketLine"> | number
    ticketId?: IntWithAggregatesFilter<"TicketLine"> | number
    productId?: IntWithAggregatesFilter<"TicketLine"> | number
    quantity?: IntWithAggregatesFilter<"TicketLine"> | number
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    ticketId?: IntFilter<"Ticket"> | number
    sellerId?: StringFilter<"Ticket"> | string
    clientId?: IntFilter<"Ticket"> | number
    state?: EnumTicketStateFilter<"Ticket"> | $Enums.TicketState
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    ticketLines?: TicketLineListRelationFilter
    seller?: XOR<PersonnelScalarRelationFilter, PersonnelWhereInput>
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    delivery?: XOR<DeliveryNullableScalarRelationFilter, DeliveryWhereInput> | null
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }

  export type TicketOrderByWithRelationInput = {
    ticketId?: SortOrder
    sellerId?: SortOrder
    clientId?: SortOrder
    state?: SortOrder
    createdAt?: SortOrder
    ticketLines?: TicketLineOrderByRelationAggregateInput
    seller?: PersonnelOrderByWithRelationInput
    client?: ClientOrderByWithRelationInput
    delivery?: DeliveryOrderByWithRelationInput
    payment?: PaymentOrderByWithRelationInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    ticketId?: number
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    sellerId?: StringFilter<"Ticket"> | string
    clientId?: IntFilter<"Ticket"> | number
    state?: EnumTicketStateFilter<"Ticket"> | $Enums.TicketState
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    ticketLines?: TicketLineListRelationFilter
    seller?: XOR<PersonnelScalarRelationFilter, PersonnelWhereInput>
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    delivery?: XOR<DeliveryNullableScalarRelationFilter, DeliveryWhereInput> | null
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }, "ticketId">

  export type TicketOrderByWithAggregationInput = {
    ticketId?: SortOrder
    sellerId?: SortOrder
    clientId?: SortOrder
    state?: SortOrder
    createdAt?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    ticketId?: IntWithAggregatesFilter<"Ticket"> | number
    sellerId?: StringWithAggregatesFilter<"Ticket"> | string
    clientId?: IntWithAggregatesFilter<"Ticket"> | number
    state?: EnumTicketStateWithAggregatesFilter<"Ticket"> | $Enums.TicketState
    createdAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    clientId?: IntFilter<"Client"> | number
    name?: StringFilter<"Client"> | string
    lastName?: StringFilter<"Client"> | string
    adress?: StringFilter<"Client"> | string
    email?: StringFilter<"Client"> | string
    password?: StringFilter<"Client"> | string
    createdAt?: DateTimeFilter<"Client"> | Date | string
    tickets?: TicketListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    clientId?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    adress?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    clientId?: number
    email?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    name?: StringFilter<"Client"> | string
    lastName?: StringFilter<"Client"> | string
    adress?: StringFilter<"Client"> | string
    password?: StringFilter<"Client"> | string
    createdAt?: DateTimeFilter<"Client"> | Date | string
    tickets?: TicketListRelationFilter
  }, "clientId" | "email">

  export type ClientOrderByWithAggregationInput = {
    clientId?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    adress?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _avg?: ClientAvgOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
    _sum?: ClientSumOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    clientId?: IntWithAggregatesFilter<"Client"> | number
    name?: StringWithAggregatesFilter<"Client"> | string
    lastName?: StringWithAggregatesFilter<"Client"> | string
    adress?: StringWithAggregatesFilter<"Client"> | string
    email?: StringWithAggregatesFilter<"Client"> | string
    password?: StringWithAggregatesFilter<"Client"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type DeliveryWhereInput = {
    AND?: DeliveryWhereInput | DeliveryWhereInput[]
    OR?: DeliveryWhereInput[]
    NOT?: DeliveryWhereInput | DeliveryWhereInput[]
    deliveryId?: IntFilter<"Delivery"> | number
    ticketId?: IntFilter<"Delivery"> | number
    adress?: StringFilter<"Delivery"> | string
    createdAt?: DateTimeFilter<"Delivery"> | Date | string
    state?: EnumDeliveryStateFilter<"Delivery"> | $Enums.DeliveryState
    fee?: DecimalFilter<"Delivery"> | Decimal | DecimalJsLike | number | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }

  export type DeliveryOrderByWithRelationInput = {
    deliveryId?: SortOrder
    ticketId?: SortOrder
    adress?: SortOrder
    createdAt?: SortOrder
    state?: SortOrder
    fee?: SortOrder
    ticket?: TicketOrderByWithRelationInput
  }

  export type DeliveryWhereUniqueInput = Prisma.AtLeast<{
    deliveryId?: number
    ticketId?: number
    AND?: DeliveryWhereInput | DeliveryWhereInput[]
    OR?: DeliveryWhereInput[]
    NOT?: DeliveryWhereInput | DeliveryWhereInput[]
    adress?: StringFilter<"Delivery"> | string
    createdAt?: DateTimeFilter<"Delivery"> | Date | string
    state?: EnumDeliveryStateFilter<"Delivery"> | $Enums.DeliveryState
    fee?: DecimalFilter<"Delivery"> | Decimal | DecimalJsLike | number | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }, "deliveryId" | "ticketId">

  export type DeliveryOrderByWithAggregationInput = {
    deliveryId?: SortOrder
    ticketId?: SortOrder
    adress?: SortOrder
    createdAt?: SortOrder
    state?: SortOrder
    fee?: SortOrder
    _count?: DeliveryCountOrderByAggregateInput
    _avg?: DeliveryAvgOrderByAggregateInput
    _max?: DeliveryMaxOrderByAggregateInput
    _min?: DeliveryMinOrderByAggregateInput
    _sum?: DeliverySumOrderByAggregateInput
  }

  export type DeliveryScalarWhereWithAggregatesInput = {
    AND?: DeliveryScalarWhereWithAggregatesInput | DeliveryScalarWhereWithAggregatesInput[]
    OR?: DeliveryScalarWhereWithAggregatesInput[]
    NOT?: DeliveryScalarWhereWithAggregatesInput | DeliveryScalarWhereWithAggregatesInput[]
    deliveryId?: IntWithAggregatesFilter<"Delivery"> | number
    ticketId?: IntWithAggregatesFilter<"Delivery"> | number
    adress?: StringWithAggregatesFilter<"Delivery"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Delivery"> | Date | string
    state?: EnumDeliveryStateWithAggregatesFilter<"Delivery"> | $Enums.DeliveryState
    fee?: DecimalWithAggregatesFilter<"Delivery"> | Decimal | DecimalJsLike | number | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    paymentId?: IntFilter<"Payment"> | number
    cashierId?: StringFilter<"Payment"> | string
    ticketId?: IntFilter<"Payment"> | number
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    cashier?: XOR<PersonnelScalarRelationFilter, PersonnelWhereInput>
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    paymentId?: SortOrder
    cashierId?: SortOrder
    ticketId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    cashier?: PersonnelOrderByWithRelationInput
    ticket?: TicketOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    paymentId?: number
    ticketId?: number
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    cashierId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    cashier?: XOR<PersonnelScalarRelationFilter, PersonnelWhereInput>
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }, "paymentId" | "ticketId">

  export type PaymentOrderByWithAggregationInput = {
    paymentId?: SortOrder
    cashierId?: SortOrder
    ticketId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    paymentId?: IntWithAggregatesFilter<"Payment"> | number
    cashierId?: StringWithAggregatesFilter<"Payment"> | string
    ticketId?: IntWithAggregatesFilter<"Payment"> | number
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type PersonnelCreateInput = {
    personnelId: string
    name: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    ingredients?: IngredientCreateNestedManyWithoutProductorInput
    steps?: StepCreateNestedManyWithoutProductorInput
    tickets?: TicketCreateNestedManyWithoutSellerInput
    payments?: PaymentCreateNestedManyWithoutCashierInput
  }

  export type PersonnelUncheckedCreateInput = {
    personnelId: string
    name: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    ingredients?: IngredientUncheckedCreateNestedManyWithoutProductorInput
    steps?: StepUncheckedCreateNestedManyWithoutProductorInput
    tickets?: TicketUncheckedCreateNestedManyWithoutSellerInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCashierInput
  }

  export type PersonnelUpdateInput = {
    personnelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: IngredientUpdateManyWithoutProductorNestedInput
    steps?: StepUpdateManyWithoutProductorNestedInput
    tickets?: TicketUpdateManyWithoutSellerNestedInput
    payments?: PaymentUpdateManyWithoutCashierNestedInput
  }

  export type PersonnelUncheckedUpdateInput = {
    personnelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: IngredientUncheckedUpdateManyWithoutProductorNestedInput
    steps?: StepUncheckedUpdateManyWithoutProductorNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutSellerNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCashierNestedInput
  }

  export type PersonnelCreateManyInput = {
    personnelId: string
    name: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
  }

  export type PersonnelUpdateManyMutationInput = {
    personnelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonnelUncheckedUpdateManyInput = {
    personnelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientCreateInput = {
    label: string
    quantity: Decimal | DecimalJsLike | number | string
    threshold: Decimal | DecimalJsLike | number | string
    provider: string
    createdAt?: Date | string
    productor: PersonnelCreateNestedOneWithoutIngredientsInput
  }

  export type IngredientUncheckedCreateInput = {
    ingredientId?: number
    productorId: string
    label: string
    quantity: Decimal | DecimalJsLike | number | string
    threshold: Decimal | DecimalJsLike | number | string
    provider: string
    createdAt?: Date | string
  }

  export type IngredientUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    threshold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    provider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productor?: PersonnelUpdateOneRequiredWithoutIngredientsNestedInput
  }

  export type IngredientUncheckedUpdateInput = {
    ingredientId?: IntFieldUpdateOperationsInput | number
    productorId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    threshold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    provider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientCreateManyInput = {
    ingredientId?: number
    productorId: string
    label: string
    quantity: Decimal | DecimalJsLike | number | string
    threshold: Decimal | DecimalJsLike | number | string
    provider: string
    createdAt?: Date | string
  }

  export type IngredientUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    threshold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    provider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientUncheckedUpdateManyInput = {
    ingredientId?: IntFieldUpdateOperationsInput | number
    productorId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    threshold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    provider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepCreateInput = {
    label: string
    duration: number
    unit: $Enums.DurationUnit
    description: string
    createdAt?: Date | string
    productor: PersonnelCreateNestedOneWithoutStepsInput
    vintages?: VintageStepCreateNestedManyWithoutStepInput
  }

  export type StepUncheckedCreateInput = {
    stepId?: number
    productorId: string
    label: string
    duration: number
    unit: $Enums.DurationUnit
    description: string
    createdAt?: Date | string
    vintages?: VintageStepUncheckedCreateNestedManyWithoutStepInput
  }

  export type StepUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    unit?: EnumDurationUnitFieldUpdateOperationsInput | $Enums.DurationUnit
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productor?: PersonnelUpdateOneRequiredWithoutStepsNestedInput
    vintages?: VintageStepUpdateManyWithoutStepNestedInput
  }

  export type StepUncheckedUpdateInput = {
    stepId?: IntFieldUpdateOperationsInput | number
    productorId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    unit?: EnumDurationUnitFieldUpdateOperationsInput | $Enums.DurationUnit
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vintages?: VintageStepUncheckedUpdateManyWithoutStepNestedInput
  }

  export type StepCreateManyInput = {
    stepId?: number
    productorId: string
    label: string
    duration: number
    unit: $Enums.DurationUnit
    description: string
    createdAt?: Date | string
  }

  export type StepUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    unit?: EnumDurationUnitFieldUpdateOperationsInput | $Enums.DurationUnit
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepUncheckedUpdateManyInput = {
    stepId?: IntFieldUpdateOperationsInput | number
    productorId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    unit?: EnumDurationUnitFieldUpdateOperationsInput | $Enums.DurationUnit
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VintageCreateInput = {
    productorId: string
    label: string
    quality: string
    createdAt?: Date | string
    steps?: VintageStepCreateNestedManyWithoutVintageInput
    products?: ProductCreateNestedManyWithoutVintageInput
  }

  export type VintageUncheckedCreateInput = {
    vintageId?: number
    productorId: string
    label: string
    quality: string
    createdAt?: Date | string
    steps?: VintageStepUncheckedCreateNestedManyWithoutVintageInput
    products?: ProductUncheckedCreateNestedManyWithoutVintageInput
  }

  export type VintageUpdateInput = {
    productorId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    quality?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: VintageStepUpdateManyWithoutVintageNestedInput
    products?: ProductUpdateManyWithoutVintageNestedInput
  }

  export type VintageUncheckedUpdateInput = {
    vintageId?: IntFieldUpdateOperationsInput | number
    productorId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    quality?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: VintageStepUncheckedUpdateManyWithoutVintageNestedInput
    products?: ProductUncheckedUpdateManyWithoutVintageNestedInput
  }

  export type VintageCreateManyInput = {
    vintageId?: number
    productorId: string
    label: string
    quality: string
    createdAt?: Date | string
  }

  export type VintageUpdateManyMutationInput = {
    productorId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    quality?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VintageUncheckedUpdateManyInput = {
    vintageId?: IntFieldUpdateOperationsInput | number
    productorId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    quality?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VintageStepCreateInput = {
    createdAt?: Date | string
    step: StepCreateNestedOneWithoutVintagesInput
    vintage: VintageCreateNestedOneWithoutStepsInput
  }

  export type VintageStepUncheckedCreateInput = {
    vintageStepId?: number
    stepId: number
    vintageId: number
    createdAt?: Date | string
  }

  export type VintageStepUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    step?: StepUpdateOneRequiredWithoutVintagesNestedInput
    vintage?: VintageUpdateOneRequiredWithoutStepsNestedInput
  }

  export type VintageStepUncheckedUpdateInput = {
    vintageStepId?: IntFieldUpdateOperationsInput | number
    stepId?: IntFieldUpdateOperationsInput | number
    vintageId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VintageStepCreateManyInput = {
    vintageStepId?: number
    stepId: number
    vintageId: number
    createdAt?: Date | string
  }

  export type VintageStepUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VintageStepUncheckedUpdateManyInput = {
    vintageStepId?: IntFieldUpdateOperationsInput | number
    stepId?: IntFieldUpdateOperationsInput | number
    vintageId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    label: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    vintage: VintageCreateNestedOneWithoutProductsInput
    format: FormatCreateNestedOneWithoutProductsInput
    ticketLines?: TicketLineCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    productId?: number
    vintageId: number
    formatId: number
    label: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    ticketLines?: TicketLineUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vintage?: VintageUpdateOneRequiredWithoutProductsNestedInput
    format?: FormatUpdateOneRequiredWithoutProductsNestedInput
    ticketLines?: TicketLineUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    productId?: IntFieldUpdateOperationsInput | number
    vintageId?: IntFieldUpdateOperationsInput | number
    formatId?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketLines?: TicketLineUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    productId?: number
    vintageId: number
    formatId: number
    label: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    productId?: IntFieldUpdateOperationsInput | number
    vintageId?: IntFieldUpdateOperationsInput | number
    formatId?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormatCreateInput = {
    label: string
    quanitity: Decimal | DecimalJsLike | number | string
    unit?: string
    products?: ProductCreateNestedManyWithoutFormatInput
  }

  export type FormatUncheckedCreateInput = {
    formatId?: number
    label: string
    quanitity: Decimal | DecimalJsLike | number | string
    unit?: string
    products?: ProductUncheckedCreateNestedManyWithoutFormatInput
  }

  export type FormatUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    quanitity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: StringFieldUpdateOperationsInput | string
    products?: ProductUpdateManyWithoutFormatNestedInput
  }

  export type FormatUncheckedUpdateInput = {
    formatId?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    quanitity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutFormatNestedInput
  }

  export type FormatCreateManyInput = {
    formatId?: number
    label: string
    quanitity: Decimal | DecimalJsLike | number | string
    unit?: string
  }

  export type FormatUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
    quanitity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: StringFieldUpdateOperationsInput | string
  }

  export type FormatUncheckedUpdateManyInput = {
    formatId?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    quanitity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: StringFieldUpdateOperationsInput | string
  }

  export type TicketLineCreateInput = {
    quantity: number
    product: ProductCreateNestedOneWithoutTicketLinesInput
    ticket: TicketCreateNestedOneWithoutTicketLinesInput
  }

  export type TicketLineUncheckedCreateInput = {
    ticketLineId?: number
    ticketId: number
    productId: number
    quantity: number
  }

  export type TicketLineUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutTicketLinesNestedInput
    ticket?: TicketUpdateOneRequiredWithoutTicketLinesNestedInput
  }

  export type TicketLineUncheckedUpdateInput = {
    ticketLineId?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type TicketLineCreateManyInput = {
    ticketLineId?: number
    ticketId: number
    productId: number
    quantity: number
  }

  export type TicketLineUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type TicketLineUncheckedUpdateManyInput = {
    ticketLineId?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type TicketCreateInput = {
    state: $Enums.TicketState
    createdAt?: Date | string
    ticketLines?: TicketLineCreateNestedManyWithoutTicketInput
    seller: PersonnelCreateNestedOneWithoutTicketsInput
    client: ClientCreateNestedOneWithoutTicketsInput
    delivery?: DeliveryCreateNestedOneWithoutTicketInput
    payment?: PaymentCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateInput = {
    ticketId?: number
    sellerId: string
    clientId: number
    state: $Enums.TicketState
    createdAt?: Date | string
    ticketLines?: TicketLineUncheckedCreateNestedManyWithoutTicketInput
    delivery?: DeliveryUncheckedCreateNestedOneWithoutTicketInput
    payment?: PaymentUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketUpdateInput = {
    state?: EnumTicketStateFieldUpdateOperationsInput | $Enums.TicketState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketLines?: TicketLineUpdateManyWithoutTicketNestedInput
    seller?: PersonnelUpdateOneRequiredWithoutTicketsNestedInput
    client?: ClientUpdateOneRequiredWithoutTicketsNestedInput
    delivery?: DeliveryUpdateOneWithoutTicketNestedInput
    payment?: PaymentUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    ticketId?: IntFieldUpdateOperationsInput | number
    sellerId?: StringFieldUpdateOperationsInput | string
    clientId?: IntFieldUpdateOperationsInput | number
    state?: EnumTicketStateFieldUpdateOperationsInput | $Enums.TicketState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketLines?: TicketLineUncheckedUpdateManyWithoutTicketNestedInput
    delivery?: DeliveryUncheckedUpdateOneWithoutTicketNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type TicketCreateManyInput = {
    ticketId?: number
    sellerId: string
    clientId: number
    state: $Enums.TicketState
    createdAt?: Date | string
  }

  export type TicketUpdateManyMutationInput = {
    state?: EnumTicketStateFieldUpdateOperationsInput | $Enums.TicketState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyInput = {
    ticketId?: IntFieldUpdateOperationsInput | number
    sellerId?: StringFieldUpdateOperationsInput | string
    clientId?: IntFieldUpdateOperationsInput | number
    state?: EnumTicketStateFieldUpdateOperationsInput | $Enums.TicketState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    name: string
    lastName: string
    adress: string
    email: string
    password: string
    createdAt?: Date | string
    tickets?: TicketCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    clientId?: number
    name: string
    lastName: string
    adress: string
    email: string
    password: string
    createdAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    adress?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    clientId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    adress?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    clientId?: number
    name: string
    lastName: string
    adress: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    adress?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    clientId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    adress?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryCreateInput = {
    adress: string
    createdAt?: Date | string
    state: $Enums.DeliveryState
    fee?: Decimal | DecimalJsLike | number | string
    ticket: TicketCreateNestedOneWithoutDeliveryInput
  }

  export type DeliveryUncheckedCreateInput = {
    deliveryId?: number
    ticketId: number
    adress: string
    createdAt?: Date | string
    state: $Enums.DeliveryState
    fee?: Decimal | DecimalJsLike | number | string
  }

  export type DeliveryUpdateInput = {
    adress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    state?: EnumDeliveryStateFieldUpdateOperationsInput | $Enums.DeliveryState
    fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ticket?: TicketUpdateOneRequiredWithoutDeliveryNestedInput
  }

  export type DeliveryUncheckedUpdateInput = {
    deliveryId?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    adress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    state?: EnumDeliveryStateFieldUpdateOperationsInput | $Enums.DeliveryState
    fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DeliveryCreateManyInput = {
    deliveryId?: number
    ticketId: number
    adress: string
    createdAt?: Date | string
    state: $Enums.DeliveryState
    fee?: Decimal | DecimalJsLike | number | string
  }

  export type DeliveryUpdateManyMutationInput = {
    adress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    state?: EnumDeliveryStateFieldUpdateOperationsInput | $Enums.DeliveryState
    fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DeliveryUncheckedUpdateManyInput = {
    deliveryId?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    adress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    state?: EnumDeliveryStateFieldUpdateOperationsInput | $Enums.DeliveryState
    fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PaymentCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    cashier: PersonnelCreateNestedOneWithoutPaymentsInput
    ticket: TicketCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    paymentId?: number
    cashierId: string
    ticketId: number
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type PaymentUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cashier?: PersonnelUpdateOneRequiredWithoutPaymentsNestedInput
    ticket?: TicketUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    paymentId?: IntFieldUpdateOperationsInput | number
    cashierId?: StringFieldUpdateOperationsInput | string
    ticketId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    paymentId?: number
    cashierId: string
    ticketId: number
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    paymentId?: IntFieldUpdateOperationsInput | number
    cashierId?: StringFieldUpdateOperationsInput | string
    ticketId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IngredientListRelationFilter = {
    every?: IngredientWhereInput
    some?: IngredientWhereInput
    none?: IngredientWhereInput
  }

  export type StepListRelationFilter = {
    every?: StepWhereInput
    some?: StepWhereInput
    none?: StepWhereInput
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type IngredientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StepOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PersonnelCountOrderByAggregateInput = {
    personnelId?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type PersonnelMaxOrderByAggregateInput = {
    personnelId?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type PersonnelMinOrderByAggregateInput = {
    personnelId?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type PersonnelScalarRelationFilter = {
    is?: PersonnelWhereInput
    isNot?: PersonnelWhereInput
  }

  export type IngredientCountOrderByAggregateInput = {
    ingredientId?: SortOrder
    productorId?: SortOrder
    label?: SortOrder
    quantity?: SortOrder
    threshold?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
  }

  export type IngredientAvgOrderByAggregateInput = {
    ingredientId?: SortOrder
    quantity?: SortOrder
    threshold?: SortOrder
  }

  export type IngredientMaxOrderByAggregateInput = {
    ingredientId?: SortOrder
    productorId?: SortOrder
    label?: SortOrder
    quantity?: SortOrder
    threshold?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
  }

  export type IngredientMinOrderByAggregateInput = {
    ingredientId?: SortOrder
    productorId?: SortOrder
    label?: SortOrder
    quantity?: SortOrder
    threshold?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
  }

  export type IngredientSumOrderByAggregateInput = {
    ingredientId?: SortOrder
    quantity?: SortOrder
    threshold?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumDurationUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.DurationUnit | EnumDurationUnitFieldRefInput<$PrismaModel>
    in?: $Enums.DurationUnit[] | ListEnumDurationUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.DurationUnit[] | ListEnumDurationUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumDurationUnitFilter<$PrismaModel> | $Enums.DurationUnit
  }

  export type VintageStepListRelationFilter = {
    every?: VintageStepWhereInput
    some?: VintageStepWhereInput
    none?: VintageStepWhereInput
  }

  export type VintageStepOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StepCountOrderByAggregateInput = {
    stepId?: SortOrder
    productorId?: SortOrder
    label?: SortOrder
    duration?: SortOrder
    unit?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type StepAvgOrderByAggregateInput = {
    stepId?: SortOrder
    duration?: SortOrder
  }

  export type StepMaxOrderByAggregateInput = {
    stepId?: SortOrder
    productorId?: SortOrder
    label?: SortOrder
    duration?: SortOrder
    unit?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type StepMinOrderByAggregateInput = {
    stepId?: SortOrder
    productorId?: SortOrder
    label?: SortOrder
    duration?: SortOrder
    unit?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type StepSumOrderByAggregateInput = {
    stepId?: SortOrder
    duration?: SortOrder
  }

  export type EnumDurationUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DurationUnit | EnumDurationUnitFieldRefInput<$PrismaModel>
    in?: $Enums.DurationUnit[] | ListEnumDurationUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.DurationUnit[] | ListEnumDurationUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumDurationUnitWithAggregatesFilter<$PrismaModel> | $Enums.DurationUnit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDurationUnitFilter<$PrismaModel>
    _max?: NestedEnumDurationUnitFilter<$PrismaModel>
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VintageCountOrderByAggregateInput = {
    vintageId?: SortOrder
    productorId?: SortOrder
    label?: SortOrder
    quality?: SortOrder
    createdAt?: SortOrder
  }

  export type VintageAvgOrderByAggregateInput = {
    vintageId?: SortOrder
  }

  export type VintageMaxOrderByAggregateInput = {
    vintageId?: SortOrder
    productorId?: SortOrder
    label?: SortOrder
    quality?: SortOrder
    createdAt?: SortOrder
  }

  export type VintageMinOrderByAggregateInput = {
    vintageId?: SortOrder
    productorId?: SortOrder
    label?: SortOrder
    quality?: SortOrder
    createdAt?: SortOrder
  }

  export type VintageSumOrderByAggregateInput = {
    vintageId?: SortOrder
  }

  export type StepScalarRelationFilter = {
    is?: StepWhereInput
    isNot?: StepWhereInput
  }

  export type VintageScalarRelationFilter = {
    is?: VintageWhereInput
    isNot?: VintageWhereInput
  }

  export type VintageStepVintageIdStepIdCompoundUniqueInput = {
    vintageId: number
    stepId: number
  }

  export type VintageStepCountOrderByAggregateInput = {
    vintageStepId?: SortOrder
    stepId?: SortOrder
    vintageId?: SortOrder
    createdAt?: SortOrder
  }

  export type VintageStepAvgOrderByAggregateInput = {
    vintageStepId?: SortOrder
    stepId?: SortOrder
    vintageId?: SortOrder
  }

  export type VintageStepMaxOrderByAggregateInput = {
    vintageStepId?: SortOrder
    stepId?: SortOrder
    vintageId?: SortOrder
    createdAt?: SortOrder
  }

  export type VintageStepMinOrderByAggregateInput = {
    vintageStepId?: SortOrder
    stepId?: SortOrder
    vintageId?: SortOrder
    createdAt?: SortOrder
  }

  export type VintageStepSumOrderByAggregateInput = {
    vintageStepId?: SortOrder
    stepId?: SortOrder
    vintageId?: SortOrder
  }

  export type FormatScalarRelationFilter = {
    is?: FormatWhereInput
    isNot?: FormatWhereInput
  }

  export type TicketLineListRelationFilter = {
    every?: TicketLineWhereInput
    some?: TicketLineWhereInput
    none?: TicketLineWhereInput
  }

  export type TicketLineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    productId?: SortOrder
    vintageId?: SortOrder
    formatId?: SortOrder
    label?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    productId?: SortOrder
    vintageId?: SortOrder
    formatId?: SortOrder
    price?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    productId?: SortOrder
    vintageId?: SortOrder
    formatId?: SortOrder
    label?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    productId?: SortOrder
    vintageId?: SortOrder
    formatId?: SortOrder
    label?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    productId?: SortOrder
    vintageId?: SortOrder
    formatId?: SortOrder
    price?: SortOrder
  }

  export type FormatCountOrderByAggregateInput = {
    formatId?: SortOrder
    label?: SortOrder
    quanitity?: SortOrder
    unit?: SortOrder
  }

  export type FormatAvgOrderByAggregateInput = {
    formatId?: SortOrder
    quanitity?: SortOrder
  }

  export type FormatMaxOrderByAggregateInput = {
    formatId?: SortOrder
    label?: SortOrder
    quanitity?: SortOrder
    unit?: SortOrder
  }

  export type FormatMinOrderByAggregateInput = {
    formatId?: SortOrder
    label?: SortOrder
    quanitity?: SortOrder
    unit?: SortOrder
  }

  export type FormatSumOrderByAggregateInput = {
    formatId?: SortOrder
    quanitity?: SortOrder
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type TicketScalarRelationFilter = {
    is?: TicketWhereInput
    isNot?: TicketWhereInput
  }

  export type TicketLineCountOrderByAggregateInput = {
    ticketLineId?: SortOrder
    ticketId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
  }

  export type TicketLineAvgOrderByAggregateInput = {
    ticketLineId?: SortOrder
    ticketId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
  }

  export type TicketLineMaxOrderByAggregateInput = {
    ticketLineId?: SortOrder
    ticketId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
  }

  export type TicketLineMinOrderByAggregateInput = {
    ticketLineId?: SortOrder
    ticketId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
  }

  export type TicketLineSumOrderByAggregateInput = {
    ticketLineId?: SortOrder
    ticketId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
  }

  export type EnumTicketStateFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketState | EnumTicketStateFieldRefInput<$PrismaModel>
    in?: $Enums.TicketState[] | ListEnumTicketStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketState[] | ListEnumTicketStateFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStateFilter<$PrismaModel> | $Enums.TicketState
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type DeliveryNullableScalarRelationFilter = {
    is?: DeliveryWhereInput | null
    isNot?: DeliveryWhereInput | null
  }

  export type PaymentNullableScalarRelationFilter = {
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
  }

  export type TicketCountOrderByAggregateInput = {
    ticketId?: SortOrder
    sellerId?: SortOrder
    clientId?: SortOrder
    state?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    ticketId?: SortOrder
    clientId?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    ticketId?: SortOrder
    sellerId?: SortOrder
    clientId?: SortOrder
    state?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    ticketId?: SortOrder
    sellerId?: SortOrder
    clientId?: SortOrder
    state?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    ticketId?: SortOrder
    clientId?: SortOrder
  }

  export type EnumTicketStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketState | EnumTicketStateFieldRefInput<$PrismaModel>
    in?: $Enums.TicketState[] | ListEnumTicketStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketState[] | ListEnumTicketStateFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStateWithAggregatesFilter<$PrismaModel> | $Enums.TicketState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStateFilter<$PrismaModel>
    _max?: NestedEnumTicketStateFilter<$PrismaModel>
  }

  export type ClientCountOrderByAggregateInput = {
    clientId?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    adress?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientAvgOrderByAggregateInput = {
    clientId?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    clientId?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    adress?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    clientId?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    adress?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientSumOrderByAggregateInput = {
    clientId?: SortOrder
  }

  export type EnumDeliveryStateFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryState | EnumDeliveryStateFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryState[] | ListEnumDeliveryStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryState[] | ListEnumDeliveryStateFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStateFilter<$PrismaModel> | $Enums.DeliveryState
  }

  export type DeliveryCountOrderByAggregateInput = {
    deliveryId?: SortOrder
    ticketId?: SortOrder
    adress?: SortOrder
    createdAt?: SortOrder
    state?: SortOrder
    fee?: SortOrder
  }

  export type DeliveryAvgOrderByAggregateInput = {
    deliveryId?: SortOrder
    ticketId?: SortOrder
    fee?: SortOrder
  }

  export type DeliveryMaxOrderByAggregateInput = {
    deliveryId?: SortOrder
    ticketId?: SortOrder
    adress?: SortOrder
    createdAt?: SortOrder
    state?: SortOrder
    fee?: SortOrder
  }

  export type DeliveryMinOrderByAggregateInput = {
    deliveryId?: SortOrder
    ticketId?: SortOrder
    adress?: SortOrder
    createdAt?: SortOrder
    state?: SortOrder
    fee?: SortOrder
  }

  export type DeliverySumOrderByAggregateInput = {
    deliveryId?: SortOrder
    ticketId?: SortOrder
    fee?: SortOrder
  }

  export type EnumDeliveryStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryState | EnumDeliveryStateFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryState[] | ListEnumDeliveryStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryState[] | ListEnumDeliveryStateFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStateWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeliveryStateFilter<$PrismaModel>
    _max?: NestedEnumDeliveryStateFilter<$PrismaModel>
  }

  export type PaymentCountOrderByAggregateInput = {
    paymentId?: SortOrder
    cashierId?: SortOrder
    ticketId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    paymentId?: SortOrder
    ticketId?: SortOrder
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    paymentId?: SortOrder
    cashierId?: SortOrder
    ticketId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    paymentId?: SortOrder
    cashierId?: SortOrder
    ticketId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    paymentId?: SortOrder
    ticketId?: SortOrder
    amount?: SortOrder
  }

  export type IngredientCreateNestedManyWithoutProductorInput = {
    create?: XOR<IngredientCreateWithoutProductorInput, IngredientUncheckedCreateWithoutProductorInput> | IngredientCreateWithoutProductorInput[] | IngredientUncheckedCreateWithoutProductorInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutProductorInput | IngredientCreateOrConnectWithoutProductorInput[]
    createMany?: IngredientCreateManyProductorInputEnvelope
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
  }

  export type StepCreateNestedManyWithoutProductorInput = {
    create?: XOR<StepCreateWithoutProductorInput, StepUncheckedCreateWithoutProductorInput> | StepCreateWithoutProductorInput[] | StepUncheckedCreateWithoutProductorInput[]
    connectOrCreate?: StepCreateOrConnectWithoutProductorInput | StepCreateOrConnectWithoutProductorInput[]
    createMany?: StepCreateManyProductorInputEnvelope
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutSellerInput = {
    create?: XOR<TicketCreateWithoutSellerInput, TicketUncheckedCreateWithoutSellerInput> | TicketCreateWithoutSellerInput[] | TicketUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutSellerInput | TicketCreateOrConnectWithoutSellerInput[]
    createMany?: TicketCreateManySellerInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutCashierInput = {
    create?: XOR<PaymentCreateWithoutCashierInput, PaymentUncheckedCreateWithoutCashierInput> | PaymentCreateWithoutCashierInput[] | PaymentUncheckedCreateWithoutCashierInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCashierInput | PaymentCreateOrConnectWithoutCashierInput[]
    createMany?: PaymentCreateManyCashierInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type IngredientUncheckedCreateNestedManyWithoutProductorInput = {
    create?: XOR<IngredientCreateWithoutProductorInput, IngredientUncheckedCreateWithoutProductorInput> | IngredientCreateWithoutProductorInput[] | IngredientUncheckedCreateWithoutProductorInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutProductorInput | IngredientCreateOrConnectWithoutProductorInput[]
    createMany?: IngredientCreateManyProductorInputEnvelope
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
  }

  export type StepUncheckedCreateNestedManyWithoutProductorInput = {
    create?: XOR<StepCreateWithoutProductorInput, StepUncheckedCreateWithoutProductorInput> | StepCreateWithoutProductorInput[] | StepUncheckedCreateWithoutProductorInput[]
    connectOrCreate?: StepCreateOrConnectWithoutProductorInput | StepCreateOrConnectWithoutProductorInput[]
    createMany?: StepCreateManyProductorInputEnvelope
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutSellerInput = {
    create?: XOR<TicketCreateWithoutSellerInput, TicketUncheckedCreateWithoutSellerInput> | TicketCreateWithoutSellerInput[] | TicketUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutSellerInput | TicketCreateOrConnectWithoutSellerInput[]
    createMany?: TicketCreateManySellerInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutCashierInput = {
    create?: XOR<PaymentCreateWithoutCashierInput, PaymentUncheckedCreateWithoutCashierInput> | PaymentCreateWithoutCashierInput[] | PaymentUncheckedCreateWithoutCashierInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCashierInput | PaymentCreateOrConnectWithoutCashierInput[]
    createMany?: PaymentCreateManyCashierInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IngredientUpdateManyWithoutProductorNestedInput = {
    create?: XOR<IngredientCreateWithoutProductorInput, IngredientUncheckedCreateWithoutProductorInput> | IngredientCreateWithoutProductorInput[] | IngredientUncheckedCreateWithoutProductorInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutProductorInput | IngredientCreateOrConnectWithoutProductorInput[]
    upsert?: IngredientUpsertWithWhereUniqueWithoutProductorInput | IngredientUpsertWithWhereUniqueWithoutProductorInput[]
    createMany?: IngredientCreateManyProductorInputEnvelope
    set?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    disconnect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    delete?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    update?: IngredientUpdateWithWhereUniqueWithoutProductorInput | IngredientUpdateWithWhereUniqueWithoutProductorInput[]
    updateMany?: IngredientUpdateManyWithWhereWithoutProductorInput | IngredientUpdateManyWithWhereWithoutProductorInput[]
    deleteMany?: IngredientScalarWhereInput | IngredientScalarWhereInput[]
  }

  export type StepUpdateManyWithoutProductorNestedInput = {
    create?: XOR<StepCreateWithoutProductorInput, StepUncheckedCreateWithoutProductorInput> | StepCreateWithoutProductorInput[] | StepUncheckedCreateWithoutProductorInput[]
    connectOrCreate?: StepCreateOrConnectWithoutProductorInput | StepCreateOrConnectWithoutProductorInput[]
    upsert?: StepUpsertWithWhereUniqueWithoutProductorInput | StepUpsertWithWhereUniqueWithoutProductorInput[]
    createMany?: StepCreateManyProductorInputEnvelope
    set?: StepWhereUniqueInput | StepWhereUniqueInput[]
    disconnect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    delete?: StepWhereUniqueInput | StepWhereUniqueInput[]
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    update?: StepUpdateWithWhereUniqueWithoutProductorInput | StepUpdateWithWhereUniqueWithoutProductorInput[]
    updateMany?: StepUpdateManyWithWhereWithoutProductorInput | StepUpdateManyWithWhereWithoutProductorInput[]
    deleteMany?: StepScalarWhereInput | StepScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutSellerNestedInput = {
    create?: XOR<TicketCreateWithoutSellerInput, TicketUncheckedCreateWithoutSellerInput> | TicketCreateWithoutSellerInput[] | TicketUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutSellerInput | TicketCreateOrConnectWithoutSellerInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutSellerInput | TicketUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: TicketCreateManySellerInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutSellerInput | TicketUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutSellerInput | TicketUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutCashierNestedInput = {
    create?: XOR<PaymentCreateWithoutCashierInput, PaymentUncheckedCreateWithoutCashierInput> | PaymentCreateWithoutCashierInput[] | PaymentUncheckedCreateWithoutCashierInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCashierInput | PaymentCreateOrConnectWithoutCashierInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutCashierInput | PaymentUpsertWithWhereUniqueWithoutCashierInput[]
    createMany?: PaymentCreateManyCashierInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutCashierInput | PaymentUpdateWithWhereUniqueWithoutCashierInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutCashierInput | PaymentUpdateManyWithWhereWithoutCashierInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type IngredientUncheckedUpdateManyWithoutProductorNestedInput = {
    create?: XOR<IngredientCreateWithoutProductorInput, IngredientUncheckedCreateWithoutProductorInput> | IngredientCreateWithoutProductorInput[] | IngredientUncheckedCreateWithoutProductorInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutProductorInput | IngredientCreateOrConnectWithoutProductorInput[]
    upsert?: IngredientUpsertWithWhereUniqueWithoutProductorInput | IngredientUpsertWithWhereUniqueWithoutProductorInput[]
    createMany?: IngredientCreateManyProductorInputEnvelope
    set?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    disconnect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    delete?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    update?: IngredientUpdateWithWhereUniqueWithoutProductorInput | IngredientUpdateWithWhereUniqueWithoutProductorInput[]
    updateMany?: IngredientUpdateManyWithWhereWithoutProductorInput | IngredientUpdateManyWithWhereWithoutProductorInput[]
    deleteMany?: IngredientScalarWhereInput | IngredientScalarWhereInput[]
  }

  export type StepUncheckedUpdateManyWithoutProductorNestedInput = {
    create?: XOR<StepCreateWithoutProductorInput, StepUncheckedCreateWithoutProductorInput> | StepCreateWithoutProductorInput[] | StepUncheckedCreateWithoutProductorInput[]
    connectOrCreate?: StepCreateOrConnectWithoutProductorInput | StepCreateOrConnectWithoutProductorInput[]
    upsert?: StepUpsertWithWhereUniqueWithoutProductorInput | StepUpsertWithWhereUniqueWithoutProductorInput[]
    createMany?: StepCreateManyProductorInputEnvelope
    set?: StepWhereUniqueInput | StepWhereUniqueInput[]
    disconnect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    delete?: StepWhereUniqueInput | StepWhereUniqueInput[]
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    update?: StepUpdateWithWhereUniqueWithoutProductorInput | StepUpdateWithWhereUniqueWithoutProductorInput[]
    updateMany?: StepUpdateManyWithWhereWithoutProductorInput | StepUpdateManyWithWhereWithoutProductorInput[]
    deleteMany?: StepScalarWhereInput | StepScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: XOR<TicketCreateWithoutSellerInput, TicketUncheckedCreateWithoutSellerInput> | TicketCreateWithoutSellerInput[] | TicketUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutSellerInput | TicketCreateOrConnectWithoutSellerInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutSellerInput | TicketUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: TicketCreateManySellerInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutSellerInput | TicketUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutSellerInput | TicketUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutCashierNestedInput = {
    create?: XOR<PaymentCreateWithoutCashierInput, PaymentUncheckedCreateWithoutCashierInput> | PaymentCreateWithoutCashierInput[] | PaymentUncheckedCreateWithoutCashierInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCashierInput | PaymentCreateOrConnectWithoutCashierInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutCashierInput | PaymentUpsertWithWhereUniqueWithoutCashierInput[]
    createMany?: PaymentCreateManyCashierInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutCashierInput | PaymentUpdateWithWhereUniqueWithoutCashierInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutCashierInput | PaymentUpdateManyWithWhereWithoutCashierInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PersonnelCreateNestedOneWithoutIngredientsInput = {
    create?: XOR<PersonnelCreateWithoutIngredientsInput, PersonnelUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: PersonnelCreateOrConnectWithoutIngredientsInput
    connect?: PersonnelWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type PersonnelUpdateOneRequiredWithoutIngredientsNestedInput = {
    create?: XOR<PersonnelCreateWithoutIngredientsInput, PersonnelUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: PersonnelCreateOrConnectWithoutIngredientsInput
    upsert?: PersonnelUpsertWithoutIngredientsInput
    connect?: PersonnelWhereUniqueInput
    update?: XOR<XOR<PersonnelUpdateToOneWithWhereWithoutIngredientsInput, PersonnelUpdateWithoutIngredientsInput>, PersonnelUncheckedUpdateWithoutIngredientsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PersonnelCreateNestedOneWithoutStepsInput = {
    create?: XOR<PersonnelCreateWithoutStepsInput, PersonnelUncheckedCreateWithoutStepsInput>
    connectOrCreate?: PersonnelCreateOrConnectWithoutStepsInput
    connect?: PersonnelWhereUniqueInput
  }

  export type VintageStepCreateNestedManyWithoutStepInput = {
    create?: XOR<VintageStepCreateWithoutStepInput, VintageStepUncheckedCreateWithoutStepInput> | VintageStepCreateWithoutStepInput[] | VintageStepUncheckedCreateWithoutStepInput[]
    connectOrCreate?: VintageStepCreateOrConnectWithoutStepInput | VintageStepCreateOrConnectWithoutStepInput[]
    createMany?: VintageStepCreateManyStepInputEnvelope
    connect?: VintageStepWhereUniqueInput | VintageStepWhereUniqueInput[]
  }

  export type VintageStepUncheckedCreateNestedManyWithoutStepInput = {
    create?: XOR<VintageStepCreateWithoutStepInput, VintageStepUncheckedCreateWithoutStepInput> | VintageStepCreateWithoutStepInput[] | VintageStepUncheckedCreateWithoutStepInput[]
    connectOrCreate?: VintageStepCreateOrConnectWithoutStepInput | VintageStepCreateOrConnectWithoutStepInput[]
    createMany?: VintageStepCreateManyStepInputEnvelope
    connect?: VintageStepWhereUniqueInput | VintageStepWhereUniqueInput[]
  }

  export type EnumDurationUnitFieldUpdateOperationsInput = {
    set?: $Enums.DurationUnit
  }

  export type PersonnelUpdateOneRequiredWithoutStepsNestedInput = {
    create?: XOR<PersonnelCreateWithoutStepsInput, PersonnelUncheckedCreateWithoutStepsInput>
    connectOrCreate?: PersonnelCreateOrConnectWithoutStepsInput
    upsert?: PersonnelUpsertWithoutStepsInput
    connect?: PersonnelWhereUniqueInput
    update?: XOR<XOR<PersonnelUpdateToOneWithWhereWithoutStepsInput, PersonnelUpdateWithoutStepsInput>, PersonnelUncheckedUpdateWithoutStepsInput>
  }

  export type VintageStepUpdateManyWithoutStepNestedInput = {
    create?: XOR<VintageStepCreateWithoutStepInput, VintageStepUncheckedCreateWithoutStepInput> | VintageStepCreateWithoutStepInput[] | VintageStepUncheckedCreateWithoutStepInput[]
    connectOrCreate?: VintageStepCreateOrConnectWithoutStepInput | VintageStepCreateOrConnectWithoutStepInput[]
    upsert?: VintageStepUpsertWithWhereUniqueWithoutStepInput | VintageStepUpsertWithWhereUniqueWithoutStepInput[]
    createMany?: VintageStepCreateManyStepInputEnvelope
    set?: VintageStepWhereUniqueInput | VintageStepWhereUniqueInput[]
    disconnect?: VintageStepWhereUniqueInput | VintageStepWhereUniqueInput[]
    delete?: VintageStepWhereUniqueInput | VintageStepWhereUniqueInput[]
    connect?: VintageStepWhereUniqueInput | VintageStepWhereUniqueInput[]
    update?: VintageStepUpdateWithWhereUniqueWithoutStepInput | VintageStepUpdateWithWhereUniqueWithoutStepInput[]
    updateMany?: VintageStepUpdateManyWithWhereWithoutStepInput | VintageStepUpdateManyWithWhereWithoutStepInput[]
    deleteMany?: VintageStepScalarWhereInput | VintageStepScalarWhereInput[]
  }

  export type VintageStepUncheckedUpdateManyWithoutStepNestedInput = {
    create?: XOR<VintageStepCreateWithoutStepInput, VintageStepUncheckedCreateWithoutStepInput> | VintageStepCreateWithoutStepInput[] | VintageStepUncheckedCreateWithoutStepInput[]
    connectOrCreate?: VintageStepCreateOrConnectWithoutStepInput | VintageStepCreateOrConnectWithoutStepInput[]
    upsert?: VintageStepUpsertWithWhereUniqueWithoutStepInput | VintageStepUpsertWithWhereUniqueWithoutStepInput[]
    createMany?: VintageStepCreateManyStepInputEnvelope
    set?: VintageStepWhereUniqueInput | VintageStepWhereUniqueInput[]
    disconnect?: VintageStepWhereUniqueInput | VintageStepWhereUniqueInput[]
    delete?: VintageStepWhereUniqueInput | VintageStepWhereUniqueInput[]
    connect?: VintageStepWhereUniqueInput | VintageStepWhereUniqueInput[]
    update?: VintageStepUpdateWithWhereUniqueWithoutStepInput | VintageStepUpdateWithWhereUniqueWithoutStepInput[]
    updateMany?: VintageStepUpdateManyWithWhereWithoutStepInput | VintageStepUpdateManyWithWhereWithoutStepInput[]
    deleteMany?: VintageStepScalarWhereInput | VintageStepScalarWhereInput[]
  }

  export type VintageStepCreateNestedManyWithoutVintageInput = {
    create?: XOR<VintageStepCreateWithoutVintageInput, VintageStepUncheckedCreateWithoutVintageInput> | VintageStepCreateWithoutVintageInput[] | VintageStepUncheckedCreateWithoutVintageInput[]
    connectOrCreate?: VintageStepCreateOrConnectWithoutVintageInput | VintageStepCreateOrConnectWithoutVintageInput[]
    createMany?: VintageStepCreateManyVintageInputEnvelope
    connect?: VintageStepWhereUniqueInput | VintageStepWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutVintageInput = {
    create?: XOR<ProductCreateWithoutVintageInput, ProductUncheckedCreateWithoutVintageInput> | ProductCreateWithoutVintageInput[] | ProductUncheckedCreateWithoutVintageInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutVintageInput | ProductCreateOrConnectWithoutVintageInput[]
    createMany?: ProductCreateManyVintageInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type VintageStepUncheckedCreateNestedManyWithoutVintageInput = {
    create?: XOR<VintageStepCreateWithoutVintageInput, VintageStepUncheckedCreateWithoutVintageInput> | VintageStepCreateWithoutVintageInput[] | VintageStepUncheckedCreateWithoutVintageInput[]
    connectOrCreate?: VintageStepCreateOrConnectWithoutVintageInput | VintageStepCreateOrConnectWithoutVintageInput[]
    createMany?: VintageStepCreateManyVintageInputEnvelope
    connect?: VintageStepWhereUniqueInput | VintageStepWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutVintageInput = {
    create?: XOR<ProductCreateWithoutVintageInput, ProductUncheckedCreateWithoutVintageInput> | ProductCreateWithoutVintageInput[] | ProductUncheckedCreateWithoutVintageInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutVintageInput | ProductCreateOrConnectWithoutVintageInput[]
    createMany?: ProductCreateManyVintageInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type VintageStepUpdateManyWithoutVintageNestedInput = {
    create?: XOR<VintageStepCreateWithoutVintageInput, VintageStepUncheckedCreateWithoutVintageInput> | VintageStepCreateWithoutVintageInput[] | VintageStepUncheckedCreateWithoutVintageInput[]
    connectOrCreate?: VintageStepCreateOrConnectWithoutVintageInput | VintageStepCreateOrConnectWithoutVintageInput[]
    upsert?: VintageStepUpsertWithWhereUniqueWithoutVintageInput | VintageStepUpsertWithWhereUniqueWithoutVintageInput[]
    createMany?: VintageStepCreateManyVintageInputEnvelope
    set?: VintageStepWhereUniqueInput | VintageStepWhereUniqueInput[]
    disconnect?: VintageStepWhereUniqueInput | VintageStepWhereUniqueInput[]
    delete?: VintageStepWhereUniqueInput | VintageStepWhereUniqueInput[]
    connect?: VintageStepWhereUniqueInput | VintageStepWhereUniqueInput[]
    update?: VintageStepUpdateWithWhereUniqueWithoutVintageInput | VintageStepUpdateWithWhereUniqueWithoutVintageInput[]
    updateMany?: VintageStepUpdateManyWithWhereWithoutVintageInput | VintageStepUpdateManyWithWhereWithoutVintageInput[]
    deleteMany?: VintageStepScalarWhereInput | VintageStepScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutVintageNestedInput = {
    create?: XOR<ProductCreateWithoutVintageInput, ProductUncheckedCreateWithoutVintageInput> | ProductCreateWithoutVintageInput[] | ProductUncheckedCreateWithoutVintageInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutVintageInput | ProductCreateOrConnectWithoutVintageInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutVintageInput | ProductUpsertWithWhereUniqueWithoutVintageInput[]
    createMany?: ProductCreateManyVintageInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutVintageInput | ProductUpdateWithWhereUniqueWithoutVintageInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutVintageInput | ProductUpdateManyWithWhereWithoutVintageInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type VintageStepUncheckedUpdateManyWithoutVintageNestedInput = {
    create?: XOR<VintageStepCreateWithoutVintageInput, VintageStepUncheckedCreateWithoutVintageInput> | VintageStepCreateWithoutVintageInput[] | VintageStepUncheckedCreateWithoutVintageInput[]
    connectOrCreate?: VintageStepCreateOrConnectWithoutVintageInput | VintageStepCreateOrConnectWithoutVintageInput[]
    upsert?: VintageStepUpsertWithWhereUniqueWithoutVintageInput | VintageStepUpsertWithWhereUniqueWithoutVintageInput[]
    createMany?: VintageStepCreateManyVintageInputEnvelope
    set?: VintageStepWhereUniqueInput | VintageStepWhereUniqueInput[]
    disconnect?: VintageStepWhereUniqueInput | VintageStepWhereUniqueInput[]
    delete?: VintageStepWhereUniqueInput | VintageStepWhereUniqueInput[]
    connect?: VintageStepWhereUniqueInput | VintageStepWhereUniqueInput[]
    update?: VintageStepUpdateWithWhereUniqueWithoutVintageInput | VintageStepUpdateWithWhereUniqueWithoutVintageInput[]
    updateMany?: VintageStepUpdateManyWithWhereWithoutVintageInput | VintageStepUpdateManyWithWhereWithoutVintageInput[]
    deleteMany?: VintageStepScalarWhereInput | VintageStepScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutVintageNestedInput = {
    create?: XOR<ProductCreateWithoutVintageInput, ProductUncheckedCreateWithoutVintageInput> | ProductCreateWithoutVintageInput[] | ProductUncheckedCreateWithoutVintageInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutVintageInput | ProductCreateOrConnectWithoutVintageInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutVintageInput | ProductUpsertWithWhereUniqueWithoutVintageInput[]
    createMany?: ProductCreateManyVintageInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutVintageInput | ProductUpdateWithWhereUniqueWithoutVintageInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutVintageInput | ProductUpdateManyWithWhereWithoutVintageInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type StepCreateNestedOneWithoutVintagesInput = {
    create?: XOR<StepCreateWithoutVintagesInput, StepUncheckedCreateWithoutVintagesInput>
    connectOrCreate?: StepCreateOrConnectWithoutVintagesInput
    connect?: StepWhereUniqueInput
  }

  export type VintageCreateNestedOneWithoutStepsInput = {
    create?: XOR<VintageCreateWithoutStepsInput, VintageUncheckedCreateWithoutStepsInput>
    connectOrCreate?: VintageCreateOrConnectWithoutStepsInput
    connect?: VintageWhereUniqueInput
  }

  export type StepUpdateOneRequiredWithoutVintagesNestedInput = {
    create?: XOR<StepCreateWithoutVintagesInput, StepUncheckedCreateWithoutVintagesInput>
    connectOrCreate?: StepCreateOrConnectWithoutVintagesInput
    upsert?: StepUpsertWithoutVintagesInput
    connect?: StepWhereUniqueInput
    update?: XOR<XOR<StepUpdateToOneWithWhereWithoutVintagesInput, StepUpdateWithoutVintagesInput>, StepUncheckedUpdateWithoutVintagesInput>
  }

  export type VintageUpdateOneRequiredWithoutStepsNestedInput = {
    create?: XOR<VintageCreateWithoutStepsInput, VintageUncheckedCreateWithoutStepsInput>
    connectOrCreate?: VintageCreateOrConnectWithoutStepsInput
    upsert?: VintageUpsertWithoutStepsInput
    connect?: VintageWhereUniqueInput
    update?: XOR<XOR<VintageUpdateToOneWithWhereWithoutStepsInput, VintageUpdateWithoutStepsInput>, VintageUncheckedUpdateWithoutStepsInput>
  }

  export type VintageCreateNestedOneWithoutProductsInput = {
    create?: XOR<VintageCreateWithoutProductsInput, VintageUncheckedCreateWithoutProductsInput>
    connectOrCreate?: VintageCreateOrConnectWithoutProductsInput
    connect?: VintageWhereUniqueInput
  }

  export type FormatCreateNestedOneWithoutProductsInput = {
    create?: XOR<FormatCreateWithoutProductsInput, FormatUncheckedCreateWithoutProductsInput>
    connectOrCreate?: FormatCreateOrConnectWithoutProductsInput
    connect?: FormatWhereUniqueInput
  }

  export type TicketLineCreateNestedManyWithoutProductInput = {
    create?: XOR<TicketLineCreateWithoutProductInput, TicketLineUncheckedCreateWithoutProductInput> | TicketLineCreateWithoutProductInput[] | TicketLineUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TicketLineCreateOrConnectWithoutProductInput | TicketLineCreateOrConnectWithoutProductInput[]
    createMany?: TicketLineCreateManyProductInputEnvelope
    connect?: TicketLineWhereUniqueInput | TicketLineWhereUniqueInput[]
  }

  export type TicketLineUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<TicketLineCreateWithoutProductInput, TicketLineUncheckedCreateWithoutProductInput> | TicketLineCreateWithoutProductInput[] | TicketLineUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TicketLineCreateOrConnectWithoutProductInput | TicketLineCreateOrConnectWithoutProductInput[]
    createMany?: TicketLineCreateManyProductInputEnvelope
    connect?: TicketLineWhereUniqueInput | TicketLineWhereUniqueInput[]
  }

  export type VintageUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<VintageCreateWithoutProductsInput, VintageUncheckedCreateWithoutProductsInput>
    connectOrCreate?: VintageCreateOrConnectWithoutProductsInput
    upsert?: VintageUpsertWithoutProductsInput
    connect?: VintageWhereUniqueInput
    update?: XOR<XOR<VintageUpdateToOneWithWhereWithoutProductsInput, VintageUpdateWithoutProductsInput>, VintageUncheckedUpdateWithoutProductsInput>
  }

  export type FormatUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<FormatCreateWithoutProductsInput, FormatUncheckedCreateWithoutProductsInput>
    connectOrCreate?: FormatCreateOrConnectWithoutProductsInput
    upsert?: FormatUpsertWithoutProductsInput
    connect?: FormatWhereUniqueInput
    update?: XOR<XOR<FormatUpdateToOneWithWhereWithoutProductsInput, FormatUpdateWithoutProductsInput>, FormatUncheckedUpdateWithoutProductsInput>
  }

  export type TicketLineUpdateManyWithoutProductNestedInput = {
    create?: XOR<TicketLineCreateWithoutProductInput, TicketLineUncheckedCreateWithoutProductInput> | TicketLineCreateWithoutProductInput[] | TicketLineUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TicketLineCreateOrConnectWithoutProductInput | TicketLineCreateOrConnectWithoutProductInput[]
    upsert?: TicketLineUpsertWithWhereUniqueWithoutProductInput | TicketLineUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: TicketLineCreateManyProductInputEnvelope
    set?: TicketLineWhereUniqueInput | TicketLineWhereUniqueInput[]
    disconnect?: TicketLineWhereUniqueInput | TicketLineWhereUniqueInput[]
    delete?: TicketLineWhereUniqueInput | TicketLineWhereUniqueInput[]
    connect?: TicketLineWhereUniqueInput | TicketLineWhereUniqueInput[]
    update?: TicketLineUpdateWithWhereUniqueWithoutProductInput | TicketLineUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: TicketLineUpdateManyWithWhereWithoutProductInput | TicketLineUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: TicketLineScalarWhereInput | TicketLineScalarWhereInput[]
  }

  export type TicketLineUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<TicketLineCreateWithoutProductInput, TicketLineUncheckedCreateWithoutProductInput> | TicketLineCreateWithoutProductInput[] | TicketLineUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TicketLineCreateOrConnectWithoutProductInput | TicketLineCreateOrConnectWithoutProductInput[]
    upsert?: TicketLineUpsertWithWhereUniqueWithoutProductInput | TicketLineUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: TicketLineCreateManyProductInputEnvelope
    set?: TicketLineWhereUniqueInput | TicketLineWhereUniqueInput[]
    disconnect?: TicketLineWhereUniqueInput | TicketLineWhereUniqueInput[]
    delete?: TicketLineWhereUniqueInput | TicketLineWhereUniqueInput[]
    connect?: TicketLineWhereUniqueInput | TicketLineWhereUniqueInput[]
    update?: TicketLineUpdateWithWhereUniqueWithoutProductInput | TicketLineUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: TicketLineUpdateManyWithWhereWithoutProductInput | TicketLineUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: TicketLineScalarWhereInput | TicketLineScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutFormatInput = {
    create?: XOR<ProductCreateWithoutFormatInput, ProductUncheckedCreateWithoutFormatInput> | ProductCreateWithoutFormatInput[] | ProductUncheckedCreateWithoutFormatInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutFormatInput | ProductCreateOrConnectWithoutFormatInput[]
    createMany?: ProductCreateManyFormatInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutFormatInput = {
    create?: XOR<ProductCreateWithoutFormatInput, ProductUncheckedCreateWithoutFormatInput> | ProductCreateWithoutFormatInput[] | ProductUncheckedCreateWithoutFormatInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutFormatInput | ProductCreateOrConnectWithoutFormatInput[]
    createMany?: ProductCreateManyFormatInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutFormatNestedInput = {
    create?: XOR<ProductCreateWithoutFormatInput, ProductUncheckedCreateWithoutFormatInput> | ProductCreateWithoutFormatInput[] | ProductUncheckedCreateWithoutFormatInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutFormatInput | ProductCreateOrConnectWithoutFormatInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutFormatInput | ProductUpsertWithWhereUniqueWithoutFormatInput[]
    createMany?: ProductCreateManyFormatInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutFormatInput | ProductUpdateWithWhereUniqueWithoutFormatInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutFormatInput | ProductUpdateManyWithWhereWithoutFormatInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutFormatNestedInput = {
    create?: XOR<ProductCreateWithoutFormatInput, ProductUncheckedCreateWithoutFormatInput> | ProductCreateWithoutFormatInput[] | ProductUncheckedCreateWithoutFormatInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutFormatInput | ProductCreateOrConnectWithoutFormatInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutFormatInput | ProductUpsertWithWhereUniqueWithoutFormatInput[]
    createMany?: ProductCreateManyFormatInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutFormatInput | ProductUpdateWithWhereUniqueWithoutFormatInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutFormatInput | ProductUpdateManyWithWhereWithoutFormatInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutTicketLinesInput = {
    create?: XOR<ProductCreateWithoutTicketLinesInput, ProductUncheckedCreateWithoutTicketLinesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutTicketLinesInput
    connect?: ProductWhereUniqueInput
  }

  export type TicketCreateNestedOneWithoutTicketLinesInput = {
    create?: XOR<TicketCreateWithoutTicketLinesInput, TicketUncheckedCreateWithoutTicketLinesInput>
    connectOrCreate?: TicketCreateOrConnectWithoutTicketLinesInput
    connect?: TicketWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutTicketLinesNestedInput = {
    create?: XOR<ProductCreateWithoutTicketLinesInput, ProductUncheckedCreateWithoutTicketLinesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutTicketLinesInput
    upsert?: ProductUpsertWithoutTicketLinesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutTicketLinesInput, ProductUpdateWithoutTicketLinesInput>, ProductUncheckedUpdateWithoutTicketLinesInput>
  }

  export type TicketUpdateOneRequiredWithoutTicketLinesNestedInput = {
    create?: XOR<TicketCreateWithoutTicketLinesInput, TicketUncheckedCreateWithoutTicketLinesInput>
    connectOrCreate?: TicketCreateOrConnectWithoutTicketLinesInput
    upsert?: TicketUpsertWithoutTicketLinesInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutTicketLinesInput, TicketUpdateWithoutTicketLinesInput>, TicketUncheckedUpdateWithoutTicketLinesInput>
  }

  export type TicketLineCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketLineCreateWithoutTicketInput, TicketLineUncheckedCreateWithoutTicketInput> | TicketLineCreateWithoutTicketInput[] | TicketLineUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketLineCreateOrConnectWithoutTicketInput | TicketLineCreateOrConnectWithoutTicketInput[]
    createMany?: TicketLineCreateManyTicketInputEnvelope
    connect?: TicketLineWhereUniqueInput | TicketLineWhereUniqueInput[]
  }

  export type PersonnelCreateNestedOneWithoutTicketsInput = {
    create?: XOR<PersonnelCreateWithoutTicketsInput, PersonnelUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: PersonnelCreateOrConnectWithoutTicketsInput
    connect?: PersonnelWhereUniqueInput
  }

  export type ClientCreateNestedOneWithoutTicketsInput = {
    create?: XOR<ClientCreateWithoutTicketsInput, ClientUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutTicketsInput
    connect?: ClientWhereUniqueInput
  }

  export type DeliveryCreateNestedOneWithoutTicketInput = {
    create?: XOR<DeliveryCreateWithoutTicketInput, DeliveryUncheckedCreateWithoutTicketInput>
    connectOrCreate?: DeliveryCreateOrConnectWithoutTicketInput
    connect?: DeliveryWhereUniqueInput
  }

  export type PaymentCreateNestedOneWithoutTicketInput = {
    create?: XOR<PaymentCreateWithoutTicketInput, PaymentUncheckedCreateWithoutTicketInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutTicketInput
    connect?: PaymentWhereUniqueInput
  }

  export type TicketLineUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketLineCreateWithoutTicketInput, TicketLineUncheckedCreateWithoutTicketInput> | TicketLineCreateWithoutTicketInput[] | TicketLineUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketLineCreateOrConnectWithoutTicketInput | TicketLineCreateOrConnectWithoutTicketInput[]
    createMany?: TicketLineCreateManyTicketInputEnvelope
    connect?: TicketLineWhereUniqueInput | TicketLineWhereUniqueInput[]
  }

  export type DeliveryUncheckedCreateNestedOneWithoutTicketInput = {
    create?: XOR<DeliveryCreateWithoutTicketInput, DeliveryUncheckedCreateWithoutTicketInput>
    connectOrCreate?: DeliveryCreateOrConnectWithoutTicketInput
    connect?: DeliveryWhereUniqueInput
  }

  export type PaymentUncheckedCreateNestedOneWithoutTicketInput = {
    create?: XOR<PaymentCreateWithoutTicketInput, PaymentUncheckedCreateWithoutTicketInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutTicketInput
    connect?: PaymentWhereUniqueInput
  }

  export type EnumTicketStateFieldUpdateOperationsInput = {
    set?: $Enums.TicketState
  }

  export type TicketLineUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketLineCreateWithoutTicketInput, TicketLineUncheckedCreateWithoutTicketInput> | TicketLineCreateWithoutTicketInput[] | TicketLineUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketLineCreateOrConnectWithoutTicketInput | TicketLineCreateOrConnectWithoutTicketInput[]
    upsert?: TicketLineUpsertWithWhereUniqueWithoutTicketInput | TicketLineUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketLineCreateManyTicketInputEnvelope
    set?: TicketLineWhereUniqueInput | TicketLineWhereUniqueInput[]
    disconnect?: TicketLineWhereUniqueInput | TicketLineWhereUniqueInput[]
    delete?: TicketLineWhereUniqueInput | TicketLineWhereUniqueInput[]
    connect?: TicketLineWhereUniqueInput | TicketLineWhereUniqueInput[]
    update?: TicketLineUpdateWithWhereUniqueWithoutTicketInput | TicketLineUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketLineUpdateManyWithWhereWithoutTicketInput | TicketLineUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketLineScalarWhereInput | TicketLineScalarWhereInput[]
  }

  export type PersonnelUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<PersonnelCreateWithoutTicketsInput, PersonnelUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: PersonnelCreateOrConnectWithoutTicketsInput
    upsert?: PersonnelUpsertWithoutTicketsInput
    connect?: PersonnelWhereUniqueInput
    update?: XOR<XOR<PersonnelUpdateToOneWithWhereWithoutTicketsInput, PersonnelUpdateWithoutTicketsInput>, PersonnelUncheckedUpdateWithoutTicketsInput>
  }

  export type ClientUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<ClientCreateWithoutTicketsInput, ClientUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutTicketsInput
    upsert?: ClientUpsertWithoutTicketsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutTicketsInput, ClientUpdateWithoutTicketsInput>, ClientUncheckedUpdateWithoutTicketsInput>
  }

  export type DeliveryUpdateOneWithoutTicketNestedInput = {
    create?: XOR<DeliveryCreateWithoutTicketInput, DeliveryUncheckedCreateWithoutTicketInput>
    connectOrCreate?: DeliveryCreateOrConnectWithoutTicketInput
    upsert?: DeliveryUpsertWithoutTicketInput
    disconnect?: DeliveryWhereInput | boolean
    delete?: DeliveryWhereInput | boolean
    connect?: DeliveryWhereUniqueInput
    update?: XOR<XOR<DeliveryUpdateToOneWithWhereWithoutTicketInput, DeliveryUpdateWithoutTicketInput>, DeliveryUncheckedUpdateWithoutTicketInput>
  }

  export type PaymentUpdateOneWithoutTicketNestedInput = {
    create?: XOR<PaymentCreateWithoutTicketInput, PaymentUncheckedCreateWithoutTicketInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutTicketInput
    upsert?: PaymentUpsertWithoutTicketInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutTicketInput, PaymentUpdateWithoutTicketInput>, PaymentUncheckedUpdateWithoutTicketInput>
  }

  export type TicketLineUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketLineCreateWithoutTicketInput, TicketLineUncheckedCreateWithoutTicketInput> | TicketLineCreateWithoutTicketInput[] | TicketLineUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketLineCreateOrConnectWithoutTicketInput | TicketLineCreateOrConnectWithoutTicketInput[]
    upsert?: TicketLineUpsertWithWhereUniqueWithoutTicketInput | TicketLineUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketLineCreateManyTicketInputEnvelope
    set?: TicketLineWhereUniqueInput | TicketLineWhereUniqueInput[]
    disconnect?: TicketLineWhereUniqueInput | TicketLineWhereUniqueInput[]
    delete?: TicketLineWhereUniqueInput | TicketLineWhereUniqueInput[]
    connect?: TicketLineWhereUniqueInput | TicketLineWhereUniqueInput[]
    update?: TicketLineUpdateWithWhereUniqueWithoutTicketInput | TicketLineUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketLineUpdateManyWithWhereWithoutTicketInput | TicketLineUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketLineScalarWhereInput | TicketLineScalarWhereInput[]
  }

  export type DeliveryUncheckedUpdateOneWithoutTicketNestedInput = {
    create?: XOR<DeliveryCreateWithoutTicketInput, DeliveryUncheckedCreateWithoutTicketInput>
    connectOrCreate?: DeliveryCreateOrConnectWithoutTicketInput
    upsert?: DeliveryUpsertWithoutTicketInput
    disconnect?: DeliveryWhereInput | boolean
    delete?: DeliveryWhereInput | boolean
    connect?: DeliveryWhereUniqueInput
    update?: XOR<XOR<DeliveryUpdateToOneWithWhereWithoutTicketInput, DeliveryUpdateWithoutTicketInput>, DeliveryUncheckedUpdateWithoutTicketInput>
  }

  export type PaymentUncheckedUpdateOneWithoutTicketNestedInput = {
    create?: XOR<PaymentCreateWithoutTicketInput, PaymentUncheckedCreateWithoutTicketInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutTicketInput
    upsert?: PaymentUpsertWithoutTicketInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutTicketInput, PaymentUpdateWithoutTicketInput>, PaymentUncheckedUpdateWithoutTicketInput>
  }

  export type TicketCreateNestedManyWithoutClientInput = {
    create?: XOR<TicketCreateWithoutClientInput, TicketUncheckedCreateWithoutClientInput> | TicketCreateWithoutClientInput[] | TicketUncheckedCreateWithoutClientInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutClientInput | TicketCreateOrConnectWithoutClientInput[]
    createMany?: TicketCreateManyClientInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<TicketCreateWithoutClientInput, TicketUncheckedCreateWithoutClientInput> | TicketCreateWithoutClientInput[] | TicketUncheckedCreateWithoutClientInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutClientInput | TicketCreateOrConnectWithoutClientInput[]
    createMany?: TicketCreateManyClientInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUpdateManyWithoutClientNestedInput = {
    create?: XOR<TicketCreateWithoutClientInput, TicketUncheckedCreateWithoutClientInput> | TicketCreateWithoutClientInput[] | TicketUncheckedCreateWithoutClientInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutClientInput | TicketCreateOrConnectWithoutClientInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutClientInput | TicketUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: TicketCreateManyClientInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutClientInput | TicketUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutClientInput | TicketUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<TicketCreateWithoutClientInput, TicketUncheckedCreateWithoutClientInput> | TicketCreateWithoutClientInput[] | TicketUncheckedCreateWithoutClientInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutClientInput | TicketCreateOrConnectWithoutClientInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutClientInput | TicketUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: TicketCreateManyClientInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutClientInput | TicketUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutClientInput | TicketUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketCreateNestedOneWithoutDeliveryInput = {
    create?: XOR<TicketCreateWithoutDeliveryInput, TicketUncheckedCreateWithoutDeliveryInput>
    connectOrCreate?: TicketCreateOrConnectWithoutDeliveryInput
    connect?: TicketWhereUniqueInput
  }

  export type EnumDeliveryStateFieldUpdateOperationsInput = {
    set?: $Enums.DeliveryState
  }

  export type TicketUpdateOneRequiredWithoutDeliveryNestedInput = {
    create?: XOR<TicketCreateWithoutDeliveryInput, TicketUncheckedCreateWithoutDeliveryInput>
    connectOrCreate?: TicketCreateOrConnectWithoutDeliveryInput
    upsert?: TicketUpsertWithoutDeliveryInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutDeliveryInput, TicketUpdateWithoutDeliveryInput>, TicketUncheckedUpdateWithoutDeliveryInput>
  }

  export type PersonnelCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<PersonnelCreateWithoutPaymentsInput, PersonnelUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: PersonnelCreateOrConnectWithoutPaymentsInput
    connect?: PersonnelWhereUniqueInput
  }

  export type TicketCreateNestedOneWithoutPaymentInput = {
    create?: XOR<TicketCreateWithoutPaymentInput, TicketUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: TicketCreateOrConnectWithoutPaymentInput
    connect?: TicketWhereUniqueInput
  }

  export type PersonnelUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<PersonnelCreateWithoutPaymentsInput, PersonnelUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: PersonnelCreateOrConnectWithoutPaymentsInput
    upsert?: PersonnelUpsertWithoutPaymentsInput
    connect?: PersonnelWhereUniqueInput
    update?: XOR<XOR<PersonnelUpdateToOneWithWhereWithoutPaymentsInput, PersonnelUpdateWithoutPaymentsInput>, PersonnelUncheckedUpdateWithoutPaymentsInput>
  }

  export type TicketUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<TicketCreateWithoutPaymentInput, TicketUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: TicketCreateOrConnectWithoutPaymentInput
    upsert?: TicketUpsertWithoutPaymentInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutPaymentInput, TicketUpdateWithoutPaymentInput>, TicketUncheckedUpdateWithoutPaymentInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumDurationUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.DurationUnit | EnumDurationUnitFieldRefInput<$PrismaModel>
    in?: $Enums.DurationUnit[] | ListEnumDurationUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.DurationUnit[] | ListEnumDurationUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumDurationUnitFilter<$PrismaModel> | $Enums.DurationUnit
  }

  export type NestedEnumDurationUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DurationUnit | EnumDurationUnitFieldRefInput<$PrismaModel>
    in?: $Enums.DurationUnit[] | ListEnumDurationUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.DurationUnit[] | ListEnumDurationUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumDurationUnitWithAggregatesFilter<$PrismaModel> | $Enums.DurationUnit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDurationUnitFilter<$PrismaModel>
    _max?: NestedEnumDurationUnitFilter<$PrismaModel>
  }

  export type NestedEnumTicketStateFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketState | EnumTicketStateFieldRefInput<$PrismaModel>
    in?: $Enums.TicketState[] | ListEnumTicketStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketState[] | ListEnumTicketStateFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStateFilter<$PrismaModel> | $Enums.TicketState
  }

  export type NestedEnumTicketStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketState | EnumTicketStateFieldRefInput<$PrismaModel>
    in?: $Enums.TicketState[] | ListEnumTicketStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketState[] | ListEnumTicketStateFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStateWithAggregatesFilter<$PrismaModel> | $Enums.TicketState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStateFilter<$PrismaModel>
    _max?: NestedEnumTicketStateFilter<$PrismaModel>
  }

  export type NestedEnumDeliveryStateFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryState | EnumDeliveryStateFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryState[] | ListEnumDeliveryStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryState[] | ListEnumDeliveryStateFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStateFilter<$PrismaModel> | $Enums.DeliveryState
  }

  export type NestedEnumDeliveryStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryState | EnumDeliveryStateFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryState[] | ListEnumDeliveryStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryState[] | ListEnumDeliveryStateFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStateWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeliveryStateFilter<$PrismaModel>
    _max?: NestedEnumDeliveryStateFilter<$PrismaModel>
  }

  export type IngredientCreateWithoutProductorInput = {
    label: string
    quantity: Decimal | DecimalJsLike | number | string
    threshold: Decimal | DecimalJsLike | number | string
    provider: string
    createdAt?: Date | string
  }

  export type IngredientUncheckedCreateWithoutProductorInput = {
    ingredientId?: number
    label: string
    quantity: Decimal | DecimalJsLike | number | string
    threshold: Decimal | DecimalJsLike | number | string
    provider: string
    createdAt?: Date | string
  }

  export type IngredientCreateOrConnectWithoutProductorInput = {
    where: IngredientWhereUniqueInput
    create: XOR<IngredientCreateWithoutProductorInput, IngredientUncheckedCreateWithoutProductorInput>
  }

  export type IngredientCreateManyProductorInputEnvelope = {
    data: IngredientCreateManyProductorInput | IngredientCreateManyProductorInput[]
    skipDuplicates?: boolean
  }

  export type StepCreateWithoutProductorInput = {
    label: string
    duration: number
    unit: $Enums.DurationUnit
    description: string
    createdAt?: Date | string
    vintages?: VintageStepCreateNestedManyWithoutStepInput
  }

  export type StepUncheckedCreateWithoutProductorInput = {
    stepId?: number
    label: string
    duration: number
    unit: $Enums.DurationUnit
    description: string
    createdAt?: Date | string
    vintages?: VintageStepUncheckedCreateNestedManyWithoutStepInput
  }

  export type StepCreateOrConnectWithoutProductorInput = {
    where: StepWhereUniqueInput
    create: XOR<StepCreateWithoutProductorInput, StepUncheckedCreateWithoutProductorInput>
  }

  export type StepCreateManyProductorInputEnvelope = {
    data: StepCreateManyProductorInput | StepCreateManyProductorInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutSellerInput = {
    state: $Enums.TicketState
    createdAt?: Date | string
    ticketLines?: TicketLineCreateNestedManyWithoutTicketInput
    client: ClientCreateNestedOneWithoutTicketsInput
    delivery?: DeliveryCreateNestedOneWithoutTicketInput
    payment?: PaymentCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutSellerInput = {
    ticketId?: number
    clientId: number
    state: $Enums.TicketState
    createdAt?: Date | string
    ticketLines?: TicketLineUncheckedCreateNestedManyWithoutTicketInput
    delivery?: DeliveryUncheckedCreateNestedOneWithoutTicketInput
    payment?: PaymentUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutSellerInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutSellerInput, TicketUncheckedCreateWithoutSellerInput>
  }

  export type TicketCreateManySellerInputEnvelope = {
    data: TicketCreateManySellerInput | TicketCreateManySellerInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutCashierInput = {
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    ticket: TicketCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutCashierInput = {
    paymentId?: number
    ticketId: number
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutCashierInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutCashierInput, PaymentUncheckedCreateWithoutCashierInput>
  }

  export type PaymentCreateManyCashierInputEnvelope = {
    data: PaymentCreateManyCashierInput | PaymentCreateManyCashierInput[]
    skipDuplicates?: boolean
  }

  export type IngredientUpsertWithWhereUniqueWithoutProductorInput = {
    where: IngredientWhereUniqueInput
    update: XOR<IngredientUpdateWithoutProductorInput, IngredientUncheckedUpdateWithoutProductorInput>
    create: XOR<IngredientCreateWithoutProductorInput, IngredientUncheckedCreateWithoutProductorInput>
  }

  export type IngredientUpdateWithWhereUniqueWithoutProductorInput = {
    where: IngredientWhereUniqueInput
    data: XOR<IngredientUpdateWithoutProductorInput, IngredientUncheckedUpdateWithoutProductorInput>
  }

  export type IngredientUpdateManyWithWhereWithoutProductorInput = {
    where: IngredientScalarWhereInput
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyWithoutProductorInput>
  }

  export type IngredientScalarWhereInput = {
    AND?: IngredientScalarWhereInput | IngredientScalarWhereInput[]
    OR?: IngredientScalarWhereInput[]
    NOT?: IngredientScalarWhereInput | IngredientScalarWhereInput[]
    ingredientId?: IntFilter<"Ingredient"> | number
    productorId?: StringFilter<"Ingredient"> | string
    label?: StringFilter<"Ingredient"> | string
    quantity?: DecimalFilter<"Ingredient"> | Decimal | DecimalJsLike | number | string
    threshold?: DecimalFilter<"Ingredient"> | Decimal | DecimalJsLike | number | string
    provider?: StringFilter<"Ingredient"> | string
    createdAt?: DateTimeFilter<"Ingredient"> | Date | string
  }

  export type StepUpsertWithWhereUniqueWithoutProductorInput = {
    where: StepWhereUniqueInput
    update: XOR<StepUpdateWithoutProductorInput, StepUncheckedUpdateWithoutProductorInput>
    create: XOR<StepCreateWithoutProductorInput, StepUncheckedCreateWithoutProductorInput>
  }

  export type StepUpdateWithWhereUniqueWithoutProductorInput = {
    where: StepWhereUniqueInput
    data: XOR<StepUpdateWithoutProductorInput, StepUncheckedUpdateWithoutProductorInput>
  }

  export type StepUpdateManyWithWhereWithoutProductorInput = {
    where: StepScalarWhereInput
    data: XOR<StepUpdateManyMutationInput, StepUncheckedUpdateManyWithoutProductorInput>
  }

  export type StepScalarWhereInput = {
    AND?: StepScalarWhereInput | StepScalarWhereInput[]
    OR?: StepScalarWhereInput[]
    NOT?: StepScalarWhereInput | StepScalarWhereInput[]
    stepId?: IntFilter<"Step"> | number
    productorId?: StringFilter<"Step"> | string
    label?: StringFilter<"Step"> | string
    duration?: IntFilter<"Step"> | number
    unit?: EnumDurationUnitFilter<"Step"> | $Enums.DurationUnit
    description?: StringFilter<"Step"> | string
    createdAt?: DateTimeFilter<"Step"> | Date | string
  }

  export type TicketUpsertWithWhereUniqueWithoutSellerInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutSellerInput, TicketUncheckedUpdateWithoutSellerInput>
    create: XOR<TicketCreateWithoutSellerInput, TicketUncheckedCreateWithoutSellerInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutSellerInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutSellerInput, TicketUncheckedUpdateWithoutSellerInput>
  }

  export type TicketUpdateManyWithWhereWithoutSellerInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutSellerInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    ticketId?: IntFilter<"Ticket"> | number
    sellerId?: StringFilter<"Ticket"> | string
    clientId?: IntFilter<"Ticket"> | number
    state?: EnumTicketStateFilter<"Ticket"> | $Enums.TicketState
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutCashierInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutCashierInput, PaymentUncheckedUpdateWithoutCashierInput>
    create: XOR<PaymentCreateWithoutCashierInput, PaymentUncheckedCreateWithoutCashierInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutCashierInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutCashierInput, PaymentUncheckedUpdateWithoutCashierInput>
  }

  export type PaymentUpdateManyWithWhereWithoutCashierInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutCashierInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    paymentId?: IntFilter<"Payment"> | number
    cashierId?: StringFilter<"Payment"> | string
    ticketId?: IntFilter<"Payment"> | number
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type PersonnelCreateWithoutIngredientsInput = {
    personnelId: string
    name: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    steps?: StepCreateNestedManyWithoutProductorInput
    tickets?: TicketCreateNestedManyWithoutSellerInput
    payments?: PaymentCreateNestedManyWithoutCashierInput
  }

  export type PersonnelUncheckedCreateWithoutIngredientsInput = {
    personnelId: string
    name: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    steps?: StepUncheckedCreateNestedManyWithoutProductorInput
    tickets?: TicketUncheckedCreateNestedManyWithoutSellerInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCashierInput
  }

  export type PersonnelCreateOrConnectWithoutIngredientsInput = {
    where: PersonnelWhereUniqueInput
    create: XOR<PersonnelCreateWithoutIngredientsInput, PersonnelUncheckedCreateWithoutIngredientsInput>
  }

  export type PersonnelUpsertWithoutIngredientsInput = {
    update: XOR<PersonnelUpdateWithoutIngredientsInput, PersonnelUncheckedUpdateWithoutIngredientsInput>
    create: XOR<PersonnelCreateWithoutIngredientsInput, PersonnelUncheckedCreateWithoutIngredientsInput>
    where?: PersonnelWhereInput
  }

  export type PersonnelUpdateToOneWithWhereWithoutIngredientsInput = {
    where?: PersonnelWhereInput
    data: XOR<PersonnelUpdateWithoutIngredientsInput, PersonnelUncheckedUpdateWithoutIngredientsInput>
  }

  export type PersonnelUpdateWithoutIngredientsInput = {
    personnelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: StepUpdateManyWithoutProductorNestedInput
    tickets?: TicketUpdateManyWithoutSellerNestedInput
    payments?: PaymentUpdateManyWithoutCashierNestedInput
  }

  export type PersonnelUncheckedUpdateWithoutIngredientsInput = {
    personnelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: StepUncheckedUpdateManyWithoutProductorNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutSellerNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCashierNestedInput
  }

  export type PersonnelCreateWithoutStepsInput = {
    personnelId: string
    name: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    ingredients?: IngredientCreateNestedManyWithoutProductorInput
    tickets?: TicketCreateNestedManyWithoutSellerInput
    payments?: PaymentCreateNestedManyWithoutCashierInput
  }

  export type PersonnelUncheckedCreateWithoutStepsInput = {
    personnelId: string
    name: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    ingredients?: IngredientUncheckedCreateNestedManyWithoutProductorInput
    tickets?: TicketUncheckedCreateNestedManyWithoutSellerInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCashierInput
  }

  export type PersonnelCreateOrConnectWithoutStepsInput = {
    where: PersonnelWhereUniqueInput
    create: XOR<PersonnelCreateWithoutStepsInput, PersonnelUncheckedCreateWithoutStepsInput>
  }

  export type VintageStepCreateWithoutStepInput = {
    createdAt?: Date | string
    vintage: VintageCreateNestedOneWithoutStepsInput
  }

  export type VintageStepUncheckedCreateWithoutStepInput = {
    vintageStepId?: number
    vintageId: number
    createdAt?: Date | string
  }

  export type VintageStepCreateOrConnectWithoutStepInput = {
    where: VintageStepWhereUniqueInput
    create: XOR<VintageStepCreateWithoutStepInput, VintageStepUncheckedCreateWithoutStepInput>
  }

  export type VintageStepCreateManyStepInputEnvelope = {
    data: VintageStepCreateManyStepInput | VintageStepCreateManyStepInput[]
    skipDuplicates?: boolean
  }

  export type PersonnelUpsertWithoutStepsInput = {
    update: XOR<PersonnelUpdateWithoutStepsInput, PersonnelUncheckedUpdateWithoutStepsInput>
    create: XOR<PersonnelCreateWithoutStepsInput, PersonnelUncheckedCreateWithoutStepsInput>
    where?: PersonnelWhereInput
  }

  export type PersonnelUpdateToOneWithWhereWithoutStepsInput = {
    where?: PersonnelWhereInput
    data: XOR<PersonnelUpdateWithoutStepsInput, PersonnelUncheckedUpdateWithoutStepsInput>
  }

  export type PersonnelUpdateWithoutStepsInput = {
    personnelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: IngredientUpdateManyWithoutProductorNestedInput
    tickets?: TicketUpdateManyWithoutSellerNestedInput
    payments?: PaymentUpdateManyWithoutCashierNestedInput
  }

  export type PersonnelUncheckedUpdateWithoutStepsInput = {
    personnelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: IngredientUncheckedUpdateManyWithoutProductorNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutSellerNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCashierNestedInput
  }

  export type VintageStepUpsertWithWhereUniqueWithoutStepInput = {
    where: VintageStepWhereUniqueInput
    update: XOR<VintageStepUpdateWithoutStepInput, VintageStepUncheckedUpdateWithoutStepInput>
    create: XOR<VintageStepCreateWithoutStepInput, VintageStepUncheckedCreateWithoutStepInput>
  }

  export type VintageStepUpdateWithWhereUniqueWithoutStepInput = {
    where: VintageStepWhereUniqueInput
    data: XOR<VintageStepUpdateWithoutStepInput, VintageStepUncheckedUpdateWithoutStepInput>
  }

  export type VintageStepUpdateManyWithWhereWithoutStepInput = {
    where: VintageStepScalarWhereInput
    data: XOR<VintageStepUpdateManyMutationInput, VintageStepUncheckedUpdateManyWithoutStepInput>
  }

  export type VintageStepScalarWhereInput = {
    AND?: VintageStepScalarWhereInput | VintageStepScalarWhereInput[]
    OR?: VintageStepScalarWhereInput[]
    NOT?: VintageStepScalarWhereInput | VintageStepScalarWhereInput[]
    vintageStepId?: IntFilter<"VintageStep"> | number
    stepId?: IntFilter<"VintageStep"> | number
    vintageId?: IntFilter<"VintageStep"> | number
    createdAt?: DateTimeFilter<"VintageStep"> | Date | string
  }

  export type VintageStepCreateWithoutVintageInput = {
    createdAt?: Date | string
    step: StepCreateNestedOneWithoutVintagesInput
  }

  export type VintageStepUncheckedCreateWithoutVintageInput = {
    vintageStepId?: number
    stepId: number
    createdAt?: Date | string
  }

  export type VintageStepCreateOrConnectWithoutVintageInput = {
    where: VintageStepWhereUniqueInput
    create: XOR<VintageStepCreateWithoutVintageInput, VintageStepUncheckedCreateWithoutVintageInput>
  }

  export type VintageStepCreateManyVintageInputEnvelope = {
    data: VintageStepCreateManyVintageInput | VintageStepCreateManyVintageInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutVintageInput = {
    label: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    format: FormatCreateNestedOneWithoutProductsInput
    ticketLines?: TicketLineCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutVintageInput = {
    productId?: number
    formatId: number
    label: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    ticketLines?: TicketLineUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutVintageInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutVintageInput, ProductUncheckedCreateWithoutVintageInput>
  }

  export type ProductCreateManyVintageInputEnvelope = {
    data: ProductCreateManyVintageInput | ProductCreateManyVintageInput[]
    skipDuplicates?: boolean
  }

  export type VintageStepUpsertWithWhereUniqueWithoutVintageInput = {
    where: VintageStepWhereUniqueInput
    update: XOR<VintageStepUpdateWithoutVintageInput, VintageStepUncheckedUpdateWithoutVintageInput>
    create: XOR<VintageStepCreateWithoutVintageInput, VintageStepUncheckedCreateWithoutVintageInput>
  }

  export type VintageStepUpdateWithWhereUniqueWithoutVintageInput = {
    where: VintageStepWhereUniqueInput
    data: XOR<VintageStepUpdateWithoutVintageInput, VintageStepUncheckedUpdateWithoutVintageInput>
  }

  export type VintageStepUpdateManyWithWhereWithoutVintageInput = {
    where: VintageStepScalarWhereInput
    data: XOR<VintageStepUpdateManyMutationInput, VintageStepUncheckedUpdateManyWithoutVintageInput>
  }

  export type ProductUpsertWithWhereUniqueWithoutVintageInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutVintageInput, ProductUncheckedUpdateWithoutVintageInput>
    create: XOR<ProductCreateWithoutVintageInput, ProductUncheckedCreateWithoutVintageInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutVintageInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutVintageInput, ProductUncheckedUpdateWithoutVintageInput>
  }

  export type ProductUpdateManyWithWhereWithoutVintageInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutVintageInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    productId?: IntFilter<"Product"> | number
    vintageId?: IntFilter<"Product"> | number
    formatId?: IntFilter<"Product"> | number
    label?: StringFilter<"Product"> | string
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type StepCreateWithoutVintagesInput = {
    label: string
    duration: number
    unit: $Enums.DurationUnit
    description: string
    createdAt?: Date | string
    productor: PersonnelCreateNestedOneWithoutStepsInput
  }

  export type StepUncheckedCreateWithoutVintagesInput = {
    stepId?: number
    productorId: string
    label: string
    duration: number
    unit: $Enums.DurationUnit
    description: string
    createdAt?: Date | string
  }

  export type StepCreateOrConnectWithoutVintagesInput = {
    where: StepWhereUniqueInput
    create: XOR<StepCreateWithoutVintagesInput, StepUncheckedCreateWithoutVintagesInput>
  }

  export type VintageCreateWithoutStepsInput = {
    productorId: string
    label: string
    quality: string
    createdAt?: Date | string
    products?: ProductCreateNestedManyWithoutVintageInput
  }

  export type VintageUncheckedCreateWithoutStepsInput = {
    vintageId?: number
    productorId: string
    label: string
    quality: string
    createdAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutVintageInput
  }

  export type VintageCreateOrConnectWithoutStepsInput = {
    where: VintageWhereUniqueInput
    create: XOR<VintageCreateWithoutStepsInput, VintageUncheckedCreateWithoutStepsInput>
  }

  export type StepUpsertWithoutVintagesInput = {
    update: XOR<StepUpdateWithoutVintagesInput, StepUncheckedUpdateWithoutVintagesInput>
    create: XOR<StepCreateWithoutVintagesInput, StepUncheckedCreateWithoutVintagesInput>
    where?: StepWhereInput
  }

  export type StepUpdateToOneWithWhereWithoutVintagesInput = {
    where?: StepWhereInput
    data: XOR<StepUpdateWithoutVintagesInput, StepUncheckedUpdateWithoutVintagesInput>
  }

  export type StepUpdateWithoutVintagesInput = {
    label?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    unit?: EnumDurationUnitFieldUpdateOperationsInput | $Enums.DurationUnit
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productor?: PersonnelUpdateOneRequiredWithoutStepsNestedInput
  }

  export type StepUncheckedUpdateWithoutVintagesInput = {
    stepId?: IntFieldUpdateOperationsInput | number
    productorId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    unit?: EnumDurationUnitFieldUpdateOperationsInput | $Enums.DurationUnit
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VintageUpsertWithoutStepsInput = {
    update: XOR<VintageUpdateWithoutStepsInput, VintageUncheckedUpdateWithoutStepsInput>
    create: XOR<VintageCreateWithoutStepsInput, VintageUncheckedCreateWithoutStepsInput>
    where?: VintageWhereInput
  }

  export type VintageUpdateToOneWithWhereWithoutStepsInput = {
    where?: VintageWhereInput
    data: XOR<VintageUpdateWithoutStepsInput, VintageUncheckedUpdateWithoutStepsInput>
  }

  export type VintageUpdateWithoutStepsInput = {
    productorId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    quality?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutVintageNestedInput
  }

  export type VintageUncheckedUpdateWithoutStepsInput = {
    vintageId?: IntFieldUpdateOperationsInput | number
    productorId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    quality?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutVintageNestedInput
  }

  export type VintageCreateWithoutProductsInput = {
    productorId: string
    label: string
    quality: string
    createdAt?: Date | string
    steps?: VintageStepCreateNestedManyWithoutVintageInput
  }

  export type VintageUncheckedCreateWithoutProductsInput = {
    vintageId?: number
    productorId: string
    label: string
    quality: string
    createdAt?: Date | string
    steps?: VintageStepUncheckedCreateNestedManyWithoutVintageInput
  }

  export type VintageCreateOrConnectWithoutProductsInput = {
    where: VintageWhereUniqueInput
    create: XOR<VintageCreateWithoutProductsInput, VintageUncheckedCreateWithoutProductsInput>
  }

  export type FormatCreateWithoutProductsInput = {
    label: string
    quanitity: Decimal | DecimalJsLike | number | string
    unit?: string
  }

  export type FormatUncheckedCreateWithoutProductsInput = {
    formatId?: number
    label: string
    quanitity: Decimal | DecimalJsLike | number | string
    unit?: string
  }

  export type FormatCreateOrConnectWithoutProductsInput = {
    where: FormatWhereUniqueInput
    create: XOR<FormatCreateWithoutProductsInput, FormatUncheckedCreateWithoutProductsInput>
  }

  export type TicketLineCreateWithoutProductInput = {
    quantity: number
    ticket: TicketCreateNestedOneWithoutTicketLinesInput
  }

  export type TicketLineUncheckedCreateWithoutProductInput = {
    ticketLineId?: number
    ticketId: number
    quantity: number
  }

  export type TicketLineCreateOrConnectWithoutProductInput = {
    where: TicketLineWhereUniqueInput
    create: XOR<TicketLineCreateWithoutProductInput, TicketLineUncheckedCreateWithoutProductInput>
  }

  export type TicketLineCreateManyProductInputEnvelope = {
    data: TicketLineCreateManyProductInput | TicketLineCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type VintageUpsertWithoutProductsInput = {
    update: XOR<VintageUpdateWithoutProductsInput, VintageUncheckedUpdateWithoutProductsInput>
    create: XOR<VintageCreateWithoutProductsInput, VintageUncheckedCreateWithoutProductsInput>
    where?: VintageWhereInput
  }

  export type VintageUpdateToOneWithWhereWithoutProductsInput = {
    where?: VintageWhereInput
    data: XOR<VintageUpdateWithoutProductsInput, VintageUncheckedUpdateWithoutProductsInput>
  }

  export type VintageUpdateWithoutProductsInput = {
    productorId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    quality?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: VintageStepUpdateManyWithoutVintageNestedInput
  }

  export type VintageUncheckedUpdateWithoutProductsInput = {
    vintageId?: IntFieldUpdateOperationsInput | number
    productorId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    quality?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: VintageStepUncheckedUpdateManyWithoutVintageNestedInput
  }

  export type FormatUpsertWithoutProductsInput = {
    update: XOR<FormatUpdateWithoutProductsInput, FormatUncheckedUpdateWithoutProductsInput>
    create: XOR<FormatCreateWithoutProductsInput, FormatUncheckedCreateWithoutProductsInput>
    where?: FormatWhereInput
  }

  export type FormatUpdateToOneWithWhereWithoutProductsInput = {
    where?: FormatWhereInput
    data: XOR<FormatUpdateWithoutProductsInput, FormatUncheckedUpdateWithoutProductsInput>
  }

  export type FormatUpdateWithoutProductsInput = {
    label?: StringFieldUpdateOperationsInput | string
    quanitity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: StringFieldUpdateOperationsInput | string
  }

  export type FormatUncheckedUpdateWithoutProductsInput = {
    formatId?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    quanitity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: StringFieldUpdateOperationsInput | string
  }

  export type TicketLineUpsertWithWhereUniqueWithoutProductInput = {
    where: TicketLineWhereUniqueInput
    update: XOR<TicketLineUpdateWithoutProductInput, TicketLineUncheckedUpdateWithoutProductInput>
    create: XOR<TicketLineCreateWithoutProductInput, TicketLineUncheckedCreateWithoutProductInput>
  }

  export type TicketLineUpdateWithWhereUniqueWithoutProductInput = {
    where: TicketLineWhereUniqueInput
    data: XOR<TicketLineUpdateWithoutProductInput, TicketLineUncheckedUpdateWithoutProductInput>
  }

  export type TicketLineUpdateManyWithWhereWithoutProductInput = {
    where: TicketLineScalarWhereInput
    data: XOR<TicketLineUpdateManyMutationInput, TicketLineUncheckedUpdateManyWithoutProductInput>
  }

  export type TicketLineScalarWhereInput = {
    AND?: TicketLineScalarWhereInput | TicketLineScalarWhereInput[]
    OR?: TicketLineScalarWhereInput[]
    NOT?: TicketLineScalarWhereInput | TicketLineScalarWhereInput[]
    ticketLineId?: IntFilter<"TicketLine"> | number
    ticketId?: IntFilter<"TicketLine"> | number
    productId?: IntFilter<"TicketLine"> | number
    quantity?: IntFilter<"TicketLine"> | number
  }

  export type ProductCreateWithoutFormatInput = {
    label: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    vintage: VintageCreateNestedOneWithoutProductsInput
    ticketLines?: TicketLineCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutFormatInput = {
    productId?: number
    vintageId: number
    label: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    ticketLines?: TicketLineUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutFormatInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutFormatInput, ProductUncheckedCreateWithoutFormatInput>
  }

  export type ProductCreateManyFormatInputEnvelope = {
    data: ProductCreateManyFormatInput | ProductCreateManyFormatInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutFormatInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutFormatInput, ProductUncheckedUpdateWithoutFormatInput>
    create: XOR<ProductCreateWithoutFormatInput, ProductUncheckedCreateWithoutFormatInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutFormatInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutFormatInput, ProductUncheckedUpdateWithoutFormatInput>
  }

  export type ProductUpdateManyWithWhereWithoutFormatInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutFormatInput>
  }

  export type ProductCreateWithoutTicketLinesInput = {
    label: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    vintage: VintageCreateNestedOneWithoutProductsInput
    format: FormatCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutTicketLinesInput = {
    productId?: number
    vintageId: number
    formatId: number
    label: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutTicketLinesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutTicketLinesInput, ProductUncheckedCreateWithoutTicketLinesInput>
  }

  export type TicketCreateWithoutTicketLinesInput = {
    state: $Enums.TicketState
    createdAt?: Date | string
    seller: PersonnelCreateNestedOneWithoutTicketsInput
    client: ClientCreateNestedOneWithoutTicketsInput
    delivery?: DeliveryCreateNestedOneWithoutTicketInput
    payment?: PaymentCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutTicketLinesInput = {
    ticketId?: number
    sellerId: string
    clientId: number
    state: $Enums.TicketState
    createdAt?: Date | string
    delivery?: DeliveryUncheckedCreateNestedOneWithoutTicketInput
    payment?: PaymentUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutTicketLinesInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutTicketLinesInput, TicketUncheckedCreateWithoutTicketLinesInput>
  }

  export type ProductUpsertWithoutTicketLinesInput = {
    update: XOR<ProductUpdateWithoutTicketLinesInput, ProductUncheckedUpdateWithoutTicketLinesInput>
    create: XOR<ProductCreateWithoutTicketLinesInput, ProductUncheckedCreateWithoutTicketLinesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutTicketLinesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutTicketLinesInput, ProductUncheckedUpdateWithoutTicketLinesInput>
  }

  export type ProductUpdateWithoutTicketLinesInput = {
    label?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vintage?: VintageUpdateOneRequiredWithoutProductsNestedInput
    format?: FormatUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutTicketLinesInput = {
    productId?: IntFieldUpdateOperationsInput | number
    vintageId?: IntFieldUpdateOperationsInput | number
    formatId?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpsertWithoutTicketLinesInput = {
    update: XOR<TicketUpdateWithoutTicketLinesInput, TicketUncheckedUpdateWithoutTicketLinesInput>
    create: XOR<TicketCreateWithoutTicketLinesInput, TicketUncheckedCreateWithoutTicketLinesInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutTicketLinesInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutTicketLinesInput, TicketUncheckedUpdateWithoutTicketLinesInput>
  }

  export type TicketUpdateWithoutTicketLinesInput = {
    state?: EnumTicketStateFieldUpdateOperationsInput | $Enums.TicketState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: PersonnelUpdateOneRequiredWithoutTicketsNestedInput
    client?: ClientUpdateOneRequiredWithoutTicketsNestedInput
    delivery?: DeliveryUpdateOneWithoutTicketNestedInput
    payment?: PaymentUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutTicketLinesInput = {
    ticketId?: IntFieldUpdateOperationsInput | number
    sellerId?: StringFieldUpdateOperationsInput | string
    clientId?: IntFieldUpdateOperationsInput | number
    state?: EnumTicketStateFieldUpdateOperationsInput | $Enums.TicketState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery?: DeliveryUncheckedUpdateOneWithoutTicketNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type TicketLineCreateWithoutTicketInput = {
    quantity: number
    product: ProductCreateNestedOneWithoutTicketLinesInput
  }

  export type TicketLineUncheckedCreateWithoutTicketInput = {
    ticketLineId?: number
    productId: number
    quantity: number
  }

  export type TicketLineCreateOrConnectWithoutTicketInput = {
    where: TicketLineWhereUniqueInput
    create: XOR<TicketLineCreateWithoutTicketInput, TicketLineUncheckedCreateWithoutTicketInput>
  }

  export type TicketLineCreateManyTicketInputEnvelope = {
    data: TicketLineCreateManyTicketInput | TicketLineCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type PersonnelCreateWithoutTicketsInput = {
    personnelId: string
    name: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    ingredients?: IngredientCreateNestedManyWithoutProductorInput
    steps?: StepCreateNestedManyWithoutProductorInput
    payments?: PaymentCreateNestedManyWithoutCashierInput
  }

  export type PersonnelUncheckedCreateWithoutTicketsInput = {
    personnelId: string
    name: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    ingredients?: IngredientUncheckedCreateNestedManyWithoutProductorInput
    steps?: StepUncheckedCreateNestedManyWithoutProductorInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCashierInput
  }

  export type PersonnelCreateOrConnectWithoutTicketsInput = {
    where: PersonnelWhereUniqueInput
    create: XOR<PersonnelCreateWithoutTicketsInput, PersonnelUncheckedCreateWithoutTicketsInput>
  }

  export type ClientCreateWithoutTicketsInput = {
    name: string
    lastName: string
    adress: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type ClientUncheckedCreateWithoutTicketsInput = {
    clientId?: number
    name: string
    lastName: string
    adress: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type ClientCreateOrConnectWithoutTicketsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutTicketsInput, ClientUncheckedCreateWithoutTicketsInput>
  }

  export type DeliveryCreateWithoutTicketInput = {
    adress: string
    createdAt?: Date | string
    state: $Enums.DeliveryState
    fee?: Decimal | DecimalJsLike | number | string
  }

  export type DeliveryUncheckedCreateWithoutTicketInput = {
    deliveryId?: number
    adress: string
    createdAt?: Date | string
    state: $Enums.DeliveryState
    fee?: Decimal | DecimalJsLike | number | string
  }

  export type DeliveryCreateOrConnectWithoutTicketInput = {
    where: DeliveryWhereUniqueInput
    create: XOR<DeliveryCreateWithoutTicketInput, DeliveryUncheckedCreateWithoutTicketInput>
  }

  export type PaymentCreateWithoutTicketInput = {
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    cashier: PersonnelCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutTicketInput = {
    paymentId?: number
    cashierId: string
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutTicketInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutTicketInput, PaymentUncheckedCreateWithoutTicketInput>
  }

  export type TicketLineUpsertWithWhereUniqueWithoutTicketInput = {
    where: TicketLineWhereUniqueInput
    update: XOR<TicketLineUpdateWithoutTicketInput, TicketLineUncheckedUpdateWithoutTicketInput>
    create: XOR<TicketLineCreateWithoutTicketInput, TicketLineUncheckedCreateWithoutTicketInput>
  }

  export type TicketLineUpdateWithWhereUniqueWithoutTicketInput = {
    where: TicketLineWhereUniqueInput
    data: XOR<TicketLineUpdateWithoutTicketInput, TicketLineUncheckedUpdateWithoutTicketInput>
  }

  export type TicketLineUpdateManyWithWhereWithoutTicketInput = {
    where: TicketLineScalarWhereInput
    data: XOR<TicketLineUpdateManyMutationInput, TicketLineUncheckedUpdateManyWithoutTicketInput>
  }

  export type PersonnelUpsertWithoutTicketsInput = {
    update: XOR<PersonnelUpdateWithoutTicketsInput, PersonnelUncheckedUpdateWithoutTicketsInput>
    create: XOR<PersonnelCreateWithoutTicketsInput, PersonnelUncheckedCreateWithoutTicketsInput>
    where?: PersonnelWhereInput
  }

  export type PersonnelUpdateToOneWithWhereWithoutTicketsInput = {
    where?: PersonnelWhereInput
    data: XOR<PersonnelUpdateWithoutTicketsInput, PersonnelUncheckedUpdateWithoutTicketsInput>
  }

  export type PersonnelUpdateWithoutTicketsInput = {
    personnelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: IngredientUpdateManyWithoutProductorNestedInput
    steps?: StepUpdateManyWithoutProductorNestedInput
    payments?: PaymentUpdateManyWithoutCashierNestedInput
  }

  export type PersonnelUncheckedUpdateWithoutTicketsInput = {
    personnelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: IngredientUncheckedUpdateManyWithoutProductorNestedInput
    steps?: StepUncheckedUpdateManyWithoutProductorNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCashierNestedInput
  }

  export type ClientUpsertWithoutTicketsInput = {
    update: XOR<ClientUpdateWithoutTicketsInput, ClientUncheckedUpdateWithoutTicketsInput>
    create: XOR<ClientCreateWithoutTicketsInput, ClientUncheckedCreateWithoutTicketsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutTicketsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutTicketsInput, ClientUncheckedUpdateWithoutTicketsInput>
  }

  export type ClientUpdateWithoutTicketsInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    adress?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateWithoutTicketsInput = {
    clientId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    adress?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryUpsertWithoutTicketInput = {
    update: XOR<DeliveryUpdateWithoutTicketInput, DeliveryUncheckedUpdateWithoutTicketInput>
    create: XOR<DeliveryCreateWithoutTicketInput, DeliveryUncheckedCreateWithoutTicketInput>
    where?: DeliveryWhereInput
  }

  export type DeliveryUpdateToOneWithWhereWithoutTicketInput = {
    where?: DeliveryWhereInput
    data: XOR<DeliveryUpdateWithoutTicketInput, DeliveryUncheckedUpdateWithoutTicketInput>
  }

  export type DeliveryUpdateWithoutTicketInput = {
    adress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    state?: EnumDeliveryStateFieldUpdateOperationsInput | $Enums.DeliveryState
    fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DeliveryUncheckedUpdateWithoutTicketInput = {
    deliveryId?: IntFieldUpdateOperationsInput | number
    adress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    state?: EnumDeliveryStateFieldUpdateOperationsInput | $Enums.DeliveryState
    fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PaymentUpsertWithoutTicketInput = {
    update: XOR<PaymentUpdateWithoutTicketInput, PaymentUncheckedUpdateWithoutTicketInput>
    create: XOR<PaymentCreateWithoutTicketInput, PaymentUncheckedCreateWithoutTicketInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutTicketInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutTicketInput, PaymentUncheckedUpdateWithoutTicketInput>
  }

  export type PaymentUpdateWithoutTicketInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cashier?: PersonnelUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutTicketInput = {
    paymentId?: IntFieldUpdateOperationsInput | number
    cashierId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateWithoutClientInput = {
    state: $Enums.TicketState
    createdAt?: Date | string
    ticketLines?: TicketLineCreateNestedManyWithoutTicketInput
    seller: PersonnelCreateNestedOneWithoutTicketsInput
    delivery?: DeliveryCreateNestedOneWithoutTicketInput
    payment?: PaymentCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutClientInput = {
    ticketId?: number
    sellerId: string
    state: $Enums.TicketState
    createdAt?: Date | string
    ticketLines?: TicketLineUncheckedCreateNestedManyWithoutTicketInput
    delivery?: DeliveryUncheckedCreateNestedOneWithoutTicketInput
    payment?: PaymentUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutClientInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutClientInput, TicketUncheckedCreateWithoutClientInput>
  }

  export type TicketCreateManyClientInputEnvelope = {
    data: TicketCreateManyClientInput | TicketCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type TicketUpsertWithWhereUniqueWithoutClientInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutClientInput, TicketUncheckedUpdateWithoutClientInput>
    create: XOR<TicketCreateWithoutClientInput, TicketUncheckedCreateWithoutClientInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutClientInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutClientInput, TicketUncheckedUpdateWithoutClientInput>
  }

  export type TicketUpdateManyWithWhereWithoutClientInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutClientInput>
  }

  export type TicketCreateWithoutDeliveryInput = {
    state: $Enums.TicketState
    createdAt?: Date | string
    ticketLines?: TicketLineCreateNestedManyWithoutTicketInput
    seller: PersonnelCreateNestedOneWithoutTicketsInput
    client: ClientCreateNestedOneWithoutTicketsInput
    payment?: PaymentCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutDeliveryInput = {
    ticketId?: number
    sellerId: string
    clientId: number
    state: $Enums.TicketState
    createdAt?: Date | string
    ticketLines?: TicketLineUncheckedCreateNestedManyWithoutTicketInput
    payment?: PaymentUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutDeliveryInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutDeliveryInput, TicketUncheckedCreateWithoutDeliveryInput>
  }

  export type TicketUpsertWithoutDeliveryInput = {
    update: XOR<TicketUpdateWithoutDeliveryInput, TicketUncheckedUpdateWithoutDeliveryInput>
    create: XOR<TicketCreateWithoutDeliveryInput, TicketUncheckedCreateWithoutDeliveryInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutDeliveryInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutDeliveryInput, TicketUncheckedUpdateWithoutDeliveryInput>
  }

  export type TicketUpdateWithoutDeliveryInput = {
    state?: EnumTicketStateFieldUpdateOperationsInput | $Enums.TicketState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketLines?: TicketLineUpdateManyWithoutTicketNestedInput
    seller?: PersonnelUpdateOneRequiredWithoutTicketsNestedInput
    client?: ClientUpdateOneRequiredWithoutTicketsNestedInput
    payment?: PaymentUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutDeliveryInput = {
    ticketId?: IntFieldUpdateOperationsInput | number
    sellerId?: StringFieldUpdateOperationsInput | string
    clientId?: IntFieldUpdateOperationsInput | number
    state?: EnumTicketStateFieldUpdateOperationsInput | $Enums.TicketState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketLines?: TicketLineUncheckedUpdateManyWithoutTicketNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type PersonnelCreateWithoutPaymentsInput = {
    personnelId: string
    name: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    ingredients?: IngredientCreateNestedManyWithoutProductorInput
    steps?: StepCreateNestedManyWithoutProductorInput
    tickets?: TicketCreateNestedManyWithoutSellerInput
  }

  export type PersonnelUncheckedCreateWithoutPaymentsInput = {
    personnelId: string
    name: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    ingredients?: IngredientUncheckedCreateNestedManyWithoutProductorInput
    steps?: StepUncheckedCreateNestedManyWithoutProductorInput
    tickets?: TicketUncheckedCreateNestedManyWithoutSellerInput
  }

  export type PersonnelCreateOrConnectWithoutPaymentsInput = {
    where: PersonnelWhereUniqueInput
    create: XOR<PersonnelCreateWithoutPaymentsInput, PersonnelUncheckedCreateWithoutPaymentsInput>
  }

  export type TicketCreateWithoutPaymentInput = {
    state: $Enums.TicketState
    createdAt?: Date | string
    ticketLines?: TicketLineCreateNestedManyWithoutTicketInput
    seller: PersonnelCreateNestedOneWithoutTicketsInput
    client: ClientCreateNestedOneWithoutTicketsInput
    delivery?: DeliveryCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutPaymentInput = {
    ticketId?: number
    sellerId: string
    clientId: number
    state: $Enums.TicketState
    createdAt?: Date | string
    ticketLines?: TicketLineUncheckedCreateNestedManyWithoutTicketInput
    delivery?: DeliveryUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutPaymentInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutPaymentInput, TicketUncheckedCreateWithoutPaymentInput>
  }

  export type PersonnelUpsertWithoutPaymentsInput = {
    update: XOR<PersonnelUpdateWithoutPaymentsInput, PersonnelUncheckedUpdateWithoutPaymentsInput>
    create: XOR<PersonnelCreateWithoutPaymentsInput, PersonnelUncheckedCreateWithoutPaymentsInput>
    where?: PersonnelWhereInput
  }

  export type PersonnelUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: PersonnelWhereInput
    data: XOR<PersonnelUpdateWithoutPaymentsInput, PersonnelUncheckedUpdateWithoutPaymentsInput>
  }

  export type PersonnelUpdateWithoutPaymentsInput = {
    personnelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: IngredientUpdateManyWithoutProductorNestedInput
    steps?: StepUpdateManyWithoutProductorNestedInput
    tickets?: TicketUpdateManyWithoutSellerNestedInput
  }

  export type PersonnelUncheckedUpdateWithoutPaymentsInput = {
    personnelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: IngredientUncheckedUpdateManyWithoutProductorNestedInput
    steps?: StepUncheckedUpdateManyWithoutProductorNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type TicketUpsertWithoutPaymentInput = {
    update: XOR<TicketUpdateWithoutPaymentInput, TicketUncheckedUpdateWithoutPaymentInput>
    create: XOR<TicketCreateWithoutPaymentInput, TicketUncheckedCreateWithoutPaymentInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutPaymentInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutPaymentInput, TicketUncheckedUpdateWithoutPaymentInput>
  }

  export type TicketUpdateWithoutPaymentInput = {
    state?: EnumTicketStateFieldUpdateOperationsInput | $Enums.TicketState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketLines?: TicketLineUpdateManyWithoutTicketNestedInput
    seller?: PersonnelUpdateOneRequiredWithoutTicketsNestedInput
    client?: ClientUpdateOneRequiredWithoutTicketsNestedInput
    delivery?: DeliveryUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutPaymentInput = {
    ticketId?: IntFieldUpdateOperationsInput | number
    sellerId?: StringFieldUpdateOperationsInput | string
    clientId?: IntFieldUpdateOperationsInput | number
    state?: EnumTicketStateFieldUpdateOperationsInput | $Enums.TicketState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketLines?: TicketLineUncheckedUpdateManyWithoutTicketNestedInput
    delivery?: DeliveryUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type IngredientCreateManyProductorInput = {
    ingredientId?: number
    label: string
    quantity: Decimal | DecimalJsLike | number | string
    threshold: Decimal | DecimalJsLike | number | string
    provider: string
    createdAt?: Date | string
  }

  export type StepCreateManyProductorInput = {
    stepId?: number
    label: string
    duration: number
    unit: $Enums.DurationUnit
    description: string
    createdAt?: Date | string
  }

  export type TicketCreateManySellerInput = {
    ticketId?: number
    clientId: number
    state: $Enums.TicketState
    createdAt?: Date | string
  }

  export type PaymentCreateManyCashierInput = {
    paymentId?: number
    ticketId: number
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type IngredientUpdateWithoutProductorInput = {
    label?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    threshold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    provider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientUncheckedUpdateWithoutProductorInput = {
    ingredientId?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    threshold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    provider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientUncheckedUpdateManyWithoutProductorInput = {
    ingredientId?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    threshold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    provider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepUpdateWithoutProductorInput = {
    label?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    unit?: EnumDurationUnitFieldUpdateOperationsInput | $Enums.DurationUnit
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vintages?: VintageStepUpdateManyWithoutStepNestedInput
  }

  export type StepUncheckedUpdateWithoutProductorInput = {
    stepId?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    unit?: EnumDurationUnitFieldUpdateOperationsInput | $Enums.DurationUnit
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vintages?: VintageStepUncheckedUpdateManyWithoutStepNestedInput
  }

  export type StepUncheckedUpdateManyWithoutProductorInput = {
    stepId?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    unit?: EnumDurationUnitFieldUpdateOperationsInput | $Enums.DurationUnit
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpdateWithoutSellerInput = {
    state?: EnumTicketStateFieldUpdateOperationsInput | $Enums.TicketState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketLines?: TicketLineUpdateManyWithoutTicketNestedInput
    client?: ClientUpdateOneRequiredWithoutTicketsNestedInput
    delivery?: DeliveryUpdateOneWithoutTicketNestedInput
    payment?: PaymentUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutSellerInput = {
    ticketId?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    state?: EnumTicketStateFieldUpdateOperationsInput | $Enums.TicketState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketLines?: TicketLineUncheckedUpdateManyWithoutTicketNestedInput
    delivery?: DeliveryUncheckedUpdateOneWithoutTicketNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutSellerInput = {
    ticketId?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    state?: EnumTicketStateFieldUpdateOperationsInput | $Enums.TicketState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutCashierInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutCashierInput = {
    paymentId?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutCashierInput = {
    paymentId?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VintageStepCreateManyStepInput = {
    vintageStepId?: number
    vintageId: number
    createdAt?: Date | string
  }

  export type VintageStepUpdateWithoutStepInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vintage?: VintageUpdateOneRequiredWithoutStepsNestedInput
  }

  export type VintageStepUncheckedUpdateWithoutStepInput = {
    vintageStepId?: IntFieldUpdateOperationsInput | number
    vintageId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VintageStepUncheckedUpdateManyWithoutStepInput = {
    vintageStepId?: IntFieldUpdateOperationsInput | number
    vintageId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VintageStepCreateManyVintageInput = {
    vintageStepId?: number
    stepId: number
    createdAt?: Date | string
  }

  export type ProductCreateManyVintageInput = {
    productId?: number
    formatId: number
    label: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type VintageStepUpdateWithoutVintageInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    step?: StepUpdateOneRequiredWithoutVintagesNestedInput
  }

  export type VintageStepUncheckedUpdateWithoutVintageInput = {
    vintageStepId?: IntFieldUpdateOperationsInput | number
    stepId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VintageStepUncheckedUpdateManyWithoutVintageInput = {
    vintageStepId?: IntFieldUpdateOperationsInput | number
    stepId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpdateWithoutVintageInput = {
    label?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    format?: FormatUpdateOneRequiredWithoutProductsNestedInput
    ticketLines?: TicketLineUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutVintageInput = {
    productId?: IntFieldUpdateOperationsInput | number
    formatId?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketLines?: TicketLineUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutVintageInput = {
    productId?: IntFieldUpdateOperationsInput | number
    formatId?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketLineCreateManyProductInput = {
    ticketLineId?: number
    ticketId: number
    quantity: number
  }

  export type TicketLineUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    ticket?: TicketUpdateOneRequiredWithoutTicketLinesNestedInput
  }

  export type TicketLineUncheckedUpdateWithoutProductInput = {
    ticketLineId?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type TicketLineUncheckedUpdateManyWithoutProductInput = {
    ticketLineId?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCreateManyFormatInput = {
    productId?: number
    vintageId: number
    label: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type ProductUpdateWithoutFormatInput = {
    label?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vintage?: VintageUpdateOneRequiredWithoutProductsNestedInput
    ticketLines?: TicketLineUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutFormatInput = {
    productId?: IntFieldUpdateOperationsInput | number
    vintageId?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketLines?: TicketLineUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutFormatInput = {
    productId?: IntFieldUpdateOperationsInput | number
    vintageId?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketLineCreateManyTicketInput = {
    ticketLineId?: number
    productId: number
    quantity: number
  }

  export type TicketLineUpdateWithoutTicketInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutTicketLinesNestedInput
  }

  export type TicketLineUncheckedUpdateWithoutTicketInput = {
    ticketLineId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type TicketLineUncheckedUpdateManyWithoutTicketInput = {
    ticketLineId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type TicketCreateManyClientInput = {
    ticketId?: number
    sellerId: string
    state: $Enums.TicketState
    createdAt?: Date | string
  }

  export type TicketUpdateWithoutClientInput = {
    state?: EnumTicketStateFieldUpdateOperationsInput | $Enums.TicketState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketLines?: TicketLineUpdateManyWithoutTicketNestedInput
    seller?: PersonnelUpdateOneRequiredWithoutTicketsNestedInput
    delivery?: DeliveryUpdateOneWithoutTicketNestedInput
    payment?: PaymentUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutClientInput = {
    ticketId?: IntFieldUpdateOperationsInput | number
    sellerId?: StringFieldUpdateOperationsInput | string
    state?: EnumTicketStateFieldUpdateOperationsInput | $Enums.TicketState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketLines?: TicketLineUncheckedUpdateManyWithoutTicketNestedInput
    delivery?: DeliveryUncheckedUpdateOneWithoutTicketNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutClientInput = {
    ticketId?: IntFieldUpdateOperationsInput | number
    sellerId?: StringFieldUpdateOperationsInput | string
    state?: EnumTicketStateFieldUpdateOperationsInput | $Enums.TicketState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}