(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{1466:function(e,a){e.exports=function(e){var a="attribute block constant cycle date dump include max min parent random range source template_from_string",n={beginKeywords:a,keywords:{name:a},relevance:0,contains:[{className:"params",begin:"\\(",end:"\\)"}]},s={begin:/\|[A-Za-z_]+:?/,keywords:"abs batch capitalize convert_encoding date date_modify default escape first format join json_encode keys last length lower merge nl2br number_format raw replace reverse round slice sort split striptags title trim upper url_encode",contains:[n]},t="autoescape block do embed extends filter flush for if import include macro sandbox set spaceless use verbatim";return t=t+" "+t.split(" ").map((function(e){return"end"+e})).join(" "),{aliases:["craftcms"],case_insensitive:!0,subLanguage:"xml",contains:[e.COMMENT(/\{#/,/#}/),{className:"template-tag",begin:/\{%/,end:/%}/,contains:[{className:"name",begin:/\w+/,keywords:t,starts:{endsWithParent:!0,contains:[s,n],relevance:0}}]},{className:"template-variable",begin:/\{\{/,end:/}}/,contains:["self",s,n]}]}}}}]);