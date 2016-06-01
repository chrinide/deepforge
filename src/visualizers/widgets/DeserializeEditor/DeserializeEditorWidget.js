/*globals define */
/*jshint browser: true*/

/**
 * Generated by VisualizerGenerator 1.7.0 from webgme on Wed Jun 01 2016 14:45:18 GMT-0500 (CDT).
 */

define([
    'widgets/TextEditor/TextEditorWidget',
    'underscore',
    'css!./styles/DeserializeEditorWidget.css'
], function (
    TextEditorWidget,
    _
) {
    'use strict';

    var DeserializeEditorWidget;
        //WIDGET_CLASS = 'deserialize-editor';

    DeserializeEditorWidget = function (logger, container) {
        TextEditorWidget.call(this, logger, container);
    };

    _.extend(DeserializeEditorWidget.prototype, TextEditorWidget.prototype);

    DeserializeEditorWidget.prototype.getHeader = function(desc) {
        return [
            `-- The deserialization function for ${desc.name}`,
            '-- Globals:',
            '--   `path` - target filename to load',
            '--',
            `-- return the loaded ${desc.name}`
        ].join('\n');
    };

    DeserializeEditorWidget.prototype.updateNode = function() {
        // nop
    };

    return DeserializeEditorWidget;
});
