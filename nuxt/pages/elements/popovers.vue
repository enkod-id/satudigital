<template>
    <div>
        <ul class="flex space-x-2 rtl:space-x-reverse">
            <li>
                <a href="javascript:;" class="text-primary hover:underline">Elements</a>
            </li>
            <li class="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                <span>Popovers</span>
            </li>
        </ul>
        <div class="space-y-8 pt-5">
            <div class="panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
                <div class="rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
                    <icon-bell />
                </div>
                <span class="ltr:mr-3 rtl:ml-3">Documentation: </span
                ><a href="https://www.npmjs.com/package/tippy.vue" target="_blank" class="block hover:underline">https://www.npmjs.com/package/tippy.vue</a>
            </div>

            <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div class="panel">
                    <div class="mb-5 flex items-center justify-between">
                        <h5 class="text-lg font-semibold dark:text-white-light">Default</h5>
                        <a
                            class="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                            href="javascript:;"
                            @click="toggleCode('code1')"
                            ><span class="flex items-center">
                                <icon-code class="me-2" />
                                Code
                            </span></a
                        >
                    </div>
                    <div class="mb-5">
                        <div class="flex w-full justify-center gap-4">
                            <client-only>
                                <a href="javascript:;" v-tippy:anchor class="btn btn-primary bg-primary">Link</a>
                                <tippy target="anchor" trigger="click">Popover using ANCHOR tag</tippy>
                            </client-only>

                            <client-only>
                                <button type="button" v-tippy:button class="btn btn-success">Button</button>
                                <tippy target="button" trigger="click">Popover using BUTTON tag</tippy>
                            </client-only>
                        </div>
                    </div>
                    <template v-if="codeArr.includes('code1')">
                        <highlight>
                            <pre>
&lt;!-- link --&gt;
&lt;a href=&quot;javascript:;&quot; v-tippy:anchor class=&quot;btn bg-primary btn-primary&quot;&gt;Link&lt;/a&gt;
&lt;tippy target=&quot;anchor&quot; trigger=&quot;click&quot;&gt;Popover using ANCHOR tag&lt;/tippy&gt;

&lt;!-- button --&gt;
&lt;button type=&quot;button&quot; v-tippy:button class=&quot;btn btn-success&quot;&gt;Button&lt;/button&gt;
&lt;tippy target=&quot;button&quot; trigger=&quot;click&quot;&gt;Popover using BUTTON tag&lt;/tippy&gt;
</pre
                            >
                        </highlight>
                    </template>
                </div>

                <div class="panel">
                    <div class="mb-5 flex items-center justify-between">
                        <h5 class="text-lg font-semibold dark:text-white-light">Placement</h5>
                        <a
                            class="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                            href="javascript:;"
                            @click="toggleCode('code2')"
                            ><span class="flex items-center">
                                <icon-code class="me-2" />
                                Code
                            </span></a
                        >
                    </div>
                    <div class="mb-5">
                        <div class="flex w-full flex-wrap justify-center gap-4">
                            <client-only>
                                <button type="button" v-tippy:top class="btn btn-info">Popover on top</button>
                                <tippy target="top" trigger="click" placement="top">Popover on top</tippy>
                            </client-only>

                            <client-only>
                                <button type="button" v-tippy:left class="btn btn-secondary">Popover on left</button>
                                <tippy target="left" trigger="click" :placement="store.rtlClass === 'rtl' ? 'right' : 'left'">Popover on left</tippy>
                            </client-only>

                            <client-only>
                                <button type="button" v-tippy:right class="btn btn-danger">Popover on right</button>
                                <tippy target="right" trigger="click" :placement="store.rtlClass === 'rtl' ? 'left' : 'right'">Popover on right</tippy>
                            </client-only>

                            <client-only>
                                <button type="button" v-tippy:bottom class="btn btn-warning">Popover on bottom</button>
                                <tippy target="bottom" trigger="click" placement="bottom">Popover on bottom</tippy>
                            </client-only>
                        </div>
                    </div>
                    <template v-if="codeArr.includes('code2')">
                        <highlight>
                            <pre>
&lt;!-- top --&gt;
&lt;button type=&quot;button&quot; v-tippy:top class=&quot;btn btn-info&quot;&gt;Popover on top&lt;/button&gt;
&lt;tippy target=&quot;top&quot; trigger=&quot;click&quot; placement=&quot;top&quot;&gt;Popover on top&lt;/tippy&gt;

&lt;!-- left --&gt;
&lt;button type=&quot;button&quot; v-tippy:left class=&quot;btn btn-secondary&quot;&gt;Popover on left&lt;/button&gt;
&lt;tippy target=&quot;left&quot; trigger=&quot;click&quot; :placement=&quot;store.rtlClass === 'rtl' ? 'right' : 'left'&quot;&gt;Popover on left&lt;/tippy&gt;

&lt;!-- right --&gt;
&lt;button type=&quot;button&quot; v-tippy:right class=&quot;btn btn-danger&quot;&gt;Popover on right&lt;/button&gt;
&lt;tippy target=&quot;right&quot; trigger=&quot;click&quot; :placement=&quot;store.rtlClass === 'rtl' ? 'left' : 'right'&quot;&gt;Popover on right&lt;/tippy&gt;

&lt;!-- bottom --&gt;
&lt;button type=&quot;button&quot; v-tippy:bottom class=&quot;btn btn-warning&quot;&gt;Popover on bottom&lt;/button&gt;
&lt;tippy target=&quot;bottom&quot; trigger=&quot;click&quot; placement=&quot;bottom&quot;&gt;Popover on bottom&lt;/tippy&gt;

&lt;!-- script --&gt;
&lt;script lang=&quot;ts&quot; setup&gt;
import { useAppStore } from '@/stores/index';
const store = useAppStore();
&lt;/script&gt;
</pre
                            >
                        </highlight>
                    </template>
                </div>

                <div class="panel lg:col-start-2 lg:row-start-1">
                    <div class="mb-5 flex items-center justify-between">
                        <h5 class="text-lg font-semibold dark:text-white-light">Dismissible popover</h5>
                        <a
                            class="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                            href="javascript:;"
                            @click="toggleCode('code3')"
                            ><span class="flex items-center">
                                <icon-code class="me-2" />
                                Code
                            </span></a
                        >
                    </div>
                    <div class="mb-5">
                        <div class="flex w-full justify-center gap-4">
                            <client-only>
                                <button type="button" v-tippy:dismissible data-dismissable="true" class="btn btn-dark">Popover on left</button>
                                <tippy target="dismissible" trigger="click" :placement="store.rtlClass === 'rtl' ? 'right' : 'left'">Popover on left</tippy>
                            </client-only>
                        </div>
                    </div>
                    <template v-if="codeArr.includes('code3')">
                        <highlight>
                            <pre>
&lt;!-- dismissible --&gt;
&lt;button type=&quot;button&quot; v-tippy:dismissible data-dismissable=&quot;true&quot; class=&quot;btn btn-dark&quot;&gt;Popover on left&lt;/button&gt;
&lt;tippy target=&quot;dismissible&quot; trigger=&quot;click&quot; :placement=&quot;store.rtlClass === 'rtl' ? 'right' : 'left'&quot;&gt;Popover on left&lt;/tippy&gt;

&lt;!-- script --&gt;
&lt;script lang=&quot;ts&quot; setup&gt;
import { useAppStore } from '@/stores/index';
const store = useAppStore();
&lt;/script&gt;
</pre
                            >
                        </highlight>
                    </template>
                </div>

                <div class="panel">
                    <div class="mb-5 flex items-center justify-between">
                        <h5 class="text-lg font-semibold dark:text-white-light">Options</h5>
                        <a
                            class="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                            href="javascript:;"
                            @click="toggleCode('code4')"
                            ><span class="flex items-center">
                                <icon-code class="me-2" />
                                Code
                            </span></a
                        >
                    </div>
                    <div class="mb-5">
                        <div class="flex w-full flex-wrap justify-center gap-4">
                            <client-only>
                                <button type="button" v-tippy:hover class="btn btn-primary">On Hover</button>
                                <tippy target="hover" trigger="mouseenter">On hover</tippy>
                            </client-only>

                            <client-only>
                                <button type="button" v-tippy:focus class="btn btn-secondary">On Focus</button>
                                <tippy target="focus" trigger="focus">On focus</tippy>
                            </client-only>

                            <client-only>
                                <button type="button" v-tippy:delay class="btn btn-info">Delay</button>
                                <tippy target="delay" delay="1000" trigger="click">Delay 1s</tippy>
                            </client-only>

                            <client-only>
                                <button type="button" v-tippy:noanimation class="btn btn-dark">Disabled Animation</button>
                                <tippy target="noanimation" animation="false" trigger="click">Disabled animation</tippy>
                            </client-only>
                        </div>
                    </div>
                    <template v-if="codeArr.includes('code4')">
                        <highlight>
                            <pre>
&lt;!-- hover --&gt;
&lt;button type=&quot;button&quot; v-tippy:hover class=&quot;btn btn-primary&quot;&gt;On Hover&lt;/button&gt;
&lt;tippy target=&quot;hover&quot; trigger=&quot;mouseenter&quot;&gt;On hover&lt;/tippy&gt;

&lt;!-- focus --&gt;
&lt;button type=&quot;button&quot; v-tippy:focus class=&quot;btn btn-secondary&quot;&gt;On Focus&lt;/button&gt;
&lt;tippy target=&quot;focus&quot; trigger=&quot;focus&quot;&gt;On focus&lt;/tippy&gt;

&lt;!-- delay --&gt;
&lt;button type=&quot;button&quot; v-tippy:delay class=&quot;btn btn-info&quot;&gt;Delay&lt;/button&gt;
&lt;tippy target=&quot;delay&quot; delay=&quot;1000&quot; trigger=&quot;click&quot;&gt;Delay 1s&lt;/tippy&gt;

&lt;!-- no animation --&gt;
&lt;button type=&quot;button&quot; v-tippy:noanimation class=&quot;btn btn-dark&quot;&gt;Disabled Animation&lt;/button&gt;
&lt;tippy target=&quot;noanimation&quot; animation=&quot;false&quot; trigger=&quot;click&quot;&gt;Disabled animation&lt;/tippy&gt;
</pre
                            >
                        </highlight>
                    </template>
                </div>

                <div class="panel lg:col-span-2">
                    <div class="mb-5 flex items-center justify-between">
                        <h5 class="text-lg font-semibold dark:text-white-light">Colors</h5>
                        <a
                            class="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                            href="javascript:;"
                            @click="toggleCode('code5')"
                            ><span class="flex items-center">
                                <icon-code class="me-2" />
                                Code
                            </span></a
                        >
                    </div>
                    <div class="mb-5">
                        <div class="flex w-full flex-wrap justify-center gap-4">
                            <client-only>
                                <button type="button" v-tippy:primary class="btn btn-primary">Primary</button>
                                <tippy target="primary" trigger="click" :extra="{ theme: 'primary' }">Primary</tippy>
                            </client-only>

                            <client-only>
                                <button type="button" v-tippy:success class="btn btn-success">Success</button>
                                <tippy target="success" trigger="click" :extra="{ theme: 'success' }">Success</tippy>
                            </client-only>

                            <client-only>
                                <button type="button" v-tippy:info class="btn btn-info">Info</button>
                                <tippy target="info" trigger="click" :extra="{ theme: 'info' }">Info</tippy>
                            </client-only>

                            <client-only>
                                <button type="button" v-tippy:danger class="btn btn-danger">Danger</button>
                                <tippy target="danger" trigger="click" :extra="{ theme: 'danger' }">Danger</tippy>
                            </client-only>

                            <client-only>
                                <button type="button" v-tippy:warning class="btn btn-warning">Warning</button>
                                <tippy target="warning" trigger="click" :extra="{ theme: 'warning' }">Warning</tippy>
                            </client-only>

                            <client-only>
                                <button type="button" v-tippy:secondary class="btn btn-secondary">Secondary</button>
                                <tippy target="secondary" trigger="click" :extra="{ theme: 'secondary' }">Secondary</tippy>
                            </client-only>

                            <client-only>
                                <button type="button" v-tippy:dark class="btn btn-dark">Dark</button>
                                <tippy target="dark" trigger="click" :extra="{ theme: 'dark' }">Dark</tippy>
                            </client-only>
                        </div>
                    </div>
                    <template v-if="codeArr.includes('code5')">
                        <highlight>
                            <pre>
&lt;!-- primary --&gt;
&lt;button type=&quot;button&quot; v-tippy:primary class=&quot;btn btn-primary&quot;&gt;Primary&lt;/button&gt;
&lt;tippy target=&quot;primary&quot; trigger=&quot;click&quot; :extra=&quot;{ theme: 'primary' }&quot;&gt;Primary&lt;/tippy&gt;

&lt;!-- success --&gt;
&lt;button type=&quot;button&quot; v-tippy:success class=&quot;btn btn-success&quot;&gt;Success&lt;/button&gt;
&lt;tippy target=&quot;success&quot; trigger=&quot;click&quot; :extra=&quot;{ theme: 'success' }&quot;&gt;Success&lt;/tippy&gt;

&lt;!-- info --&gt;
&lt;button type=&quot;button&quot; v-tippy:info class=&quot;btn btn-info&quot;&gt;Info&lt;/button&gt;
&lt;tippy target=&quot;info&quot; trigger=&quot;click&quot; :extra=&quot;{ theme: 'info' }&quot;&gt;Info&lt;/tippy&gt;

&lt;!-- danger --&gt;
&lt;button type=&quot;button&quot; v-tippy:danger class=&quot;btn btn-danger&quot;&gt;Danger&lt;/button&gt;
&lt;tippy target=&quot;danger&quot; trigger=&quot;click&quot; :extra=&quot;{ theme: 'danger' }&quot;&gt;Danger&lt;/tippy&gt;

&lt;!-- warning --&gt;
&lt;button type=&quot;button&quot; v-tippy:warning class=&quot;btn btn-warning&quot;&gt;Warning&lt;/button&gt;
&lt;tippy target=&quot;warning&quot; trigger=&quot;click&quot; :extra=&quot;{ theme: 'warning' }&quot;&gt;Warning&lt;/tippy&gt;

&lt;!-- secondary --&gt;
&lt;button type=&quot;button&quot; v-tippy:secondary class=&quot;btn btn-secondary&quot;&gt;Secondary&lt;/button&gt;
&lt;tippy target=&quot;secondary&quot; trigger=&quot;click&quot; :extra=&quot;{ theme: 'secondary' }&quot;&gt;Secondary&lt;/tippy&gt;

&lt;!-- dark --&gt;
&lt;button type=&quot;button&quot; v-tippy:dark class=&quot;btn btn-dark&quot;&gt;Dark&lt;/button&gt;
&lt;tippy target=&quot;dark&quot; trigger=&quot;click&quot; :extra=&quot;{ theme: 'dark' }&quot;&gt;Dark&lt;/tippy&gt;
</pre
                            >
                        </highlight>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
    import highlight from '@/components/plugins/highlight.vue';
    import codePreview from '@/composables/codePreview';
    import { useAppStore } from '@/stores/index';
    useHead({ title: 'Popovers' });

    const store = useAppStore();
    const { codeArr, toggleCode } = codePreview();
</script>
