## OpenForge Docs (or whatever)

## Requests and Responses

* [GET] **GetMod** request: Gets details about a mod
  * Params:
    * Integer **ModID**: The ID of the mod trying to get retrieved
  * Response:
    * Mod **Mod**: The mod
* [GET] **ListMods** request: Lists some mods
  * Params:
    * Integer **Amount**: The amount of mods to list
  * Response:
    * IntegerArray **Mods**: An array of **ModID**s
    * Integer **NextPage**: The next page of the list
* [GET] **GetVersionList**: Gets the list of versions from a mod
  * Params:
    * Integer **VersionBucketID**: The version bucket to list
    * Integer **Amount**: The amount of versions to list
    * Integer **MCVersion**: The MC Version to filter for
  * Response:
    * VersionArray **Versions**: The versions
* [GET] **GetModFile**: Get a file of a mod
  * Params:
    * Integer **FileID**: The ID of the file
  * Response:
    * String **URL**: A URL to the file of the mod version in the CDN
* [GET] **GetAuthor**: Get data from an author
  * Params:
    * Integer **AuthorID**: The ID of the author
  * Response:
    * Author **Author**: The author

## Objects

* **Mod**: A mod
  * String **Name**: The name of the mod
  * String **Image**: A URL to the mod's image in the CDN
  * Integer **ID**: The mod's id
  * String **Description**: A description of the mod
  * Integer **Author**: The ID of the author
  * Integer **VersionBucket**: The ID of the version bucket for the mod
* **Version**: A version
  * String **Filename**: The name of the file
  * Integer **FileID**: The ID of the file
  * Integer **Version**: The version number
  * String **VersionNick**: The version nick (AKA: "7.26.94")
  * Integer **VersionID**: The ID of the version
* **Author**: An author
  * String **Name**: The (user)name of the author
  * String **Image**: A link to the profile image of the author in the CDN
  * IntegerArray **Mods**: An array of the ID of each of the author's mods
  * Integer **AuthorID**: The ID of the author